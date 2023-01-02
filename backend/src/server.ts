// using dotenv we can access the constants inside env file like this process.env.MONGO_URL;
import dotenv from 'dotenv';
dotenv.config();
import path from 'path';



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
app.use("/api/orders", orderRouter);

app.use(express.static('public'));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
// __dirname gives absolute path to the file we are building angular project in public folder so we need to point the server to the index.html there
// path will join the address according to the OS / or \ 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("server runs on http://localhost:" + PORT);

})