// using dotenv we can access the constants inside env file like this process.env.MONGO_URL;
import dotenv from 'dotenv';
dotenv.config();



import express from "express";
import cors from "cors";

import foodRouter from './routers/food.router';
import userRouter from "./routers/user.router";
import orderRouter from "./routers/order.router";

//connecting to the database
import { dbConnect } from './configs/database.config';
dbConnect();

const app = express();
app.use(express.json());

// cors is to set the credentials for the frontend address to be served by server in other address http://localhost:5000
app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"]
}));

app.use("/api/foods", foodRouter);
app.use("/api/users", userRouter);


const PORT = 5000;
app.listen(PORT, () => {
    console.log("server runs on http://localhost:" + PORT);

})