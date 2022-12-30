import { Router } from "express";
import { sample_foods, sample_tags } from "../data";
import asyncHandler from 'express-async-handler';
import { FoodModel } from "../models/food.model";

//getting an express router

const router = Router();

// using  asyncHandler to make sure that our database and app are async
router.get("/", asyncHandler(async (req, res) => {
    const foods = await FoodModel.find();
    res.send(foods);
}
))

// to seed the sample data for the first time 
router.get("/seed", asyncHandler(async (req, res) => {

    const foodsCount = await FoodModel.countDocuments();
    if (foodsCount > 0) {
        res.send("Seed is already done")
        return;
    }

    await FoodModel.create(sample_foods);
    res.send("Seed is done");
}

))

router.get("/search/:searchTerm", asyncHandler(async (req, res) => {
    // this is a regular expansion to convert the searchTerm to make this search case insensitive
    const searchRegex = new RegExp(req.params.searchTerm, 'i');

    const foods = await FoodModel.find({ name: { $regex: searchRegex } });


    //const searchTerm = req.params.searchTerm;
    //const foods = sample_foods.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));

    res.send(foods);
}))


router.get("/tags", asyncHandler(async (req, res) => {


    // aggregate is to get the all tags and their counts individually like grouping in sql and then counting them
    const tags = await FoodModel.aggregate([
        {
            $unwind: '$tags'
        },
        {
            $group: {
                _id: '$tags',
                count: { $sum: 1 }
            }
        },
        {
            $project: {
                _id: 0,
                name: '$_id',
                count: '$count'
            }
        }
    ]).sort({ count: -1 })


    // this is to get the count of all the foods 
    const all = {
        name: 'All',
        count: await FoodModel.countDocuments()
    };

    // unshift is opposite of push in push we add an item to the end of array but unshift will add the item to the beginning the array
    tags.unshift(all);

    res.send(tags);


}))

router.get("/tag/:tagName", asyncHandler(async (req, res) => {
    // const tagName = req.params.tagName;
    // const foods = sample_foods.filter(food => food.tags?.includes(tagName));

    const foods = await FoodModel.find({ tags: req.params.tagName })


    res.send(foods);
}))

router.get("/:foodId", asyncHandler(async (req, res) => {
    // const foodId = req.params.foodId;
    // const food = sample_foods.find(food => food.id == foodId);

    const food = await FoodModel.findById(req.params.foodId);

    res.send(food);
}))

export default router;