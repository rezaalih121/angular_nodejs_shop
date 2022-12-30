import express from "express";
import cors from "cors";
import { sample_foods, sample_tags } from "./data";

const app = express();

// cors is to set the cridentials for the frontend address to be served by server in other address http://localhost:5000
app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"]
}));

app.get("/api/foods", (req, res) => {
    res.send(sample_foods);
})

app.get("/api/foods/search/:searchTerm", (req, res) => {
    const searchTerm = req.params.searchTerm;
    const foods = sample_foods.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));

    res.send(foods);
})

app.get("/api/foods/search/:searchTerm", (req, res) => {
    const searchTerm = req.params.searchTerm;
    const foods = sample_foods.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));

    res.send(foods);
})

app.get("/api/foods/tags", (req, res) => {
    res.send(sample_tags);
})

app.get("/api/foods/tag/:tagNeme", (req, res) => {
    const tagNeme = req.params.tagNeme;
    const foods = sample_foods.filter(food => food.tags?.includes(tagNeme));

    res.send(foods);
})

app.get("/api/foods/:foodId", (req, res) => {
    const foodId = req.params.foodId;
    const food = sample_foods.find(food => food.id == foodId);

    res.send(food);
})




const PORT = 5000;
app.listen(PORT, () => {
    console.log("server runs on http://localhost:" + PORT);

})