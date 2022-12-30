// here to create the models first we need create Interface then Schema and finally model as follow

import { Schema, model } from "mongoose";

export interface Food {
    id: string;
    name: string;
    price: number;
    tags: string[];
    favorite: boolean;
    stars: number;
    imageUrl: string;
    origins: string[];
    cookTime: string;
}
// in Mongodb id is exists by default and it named _id to obtain the database id and having its value to our application id we need to use virtual 
// options : toJson will send value _id to id in json 
// toObject send value of _id to id in objects 
//timestamps will keep track of created and updated datelines and sets the timestamps automatically

export const FoodSchema = new Schema<Food>(
    {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        tags: { type: [String] },
        favorite: { type: Boolean, default: false },
        stars: { type: Number, required: true },
        imageUrl: { type: String, required: true },
        origins: { type: [String], required: true },
        cookTime: { type: String, required: true },
    }, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
}
);

export const FoodModel = model<Food>('food', FoodSchema);