import { Router } from "express";
import { sample_users } from "../data";
import jwt from "jsonwebtoken";
import asyncHandler from 'express-async-handler';
import { User, UserModel } from "../models/user.model";
import { HTTP_BAD_REQUEST } from "../constants/http_status";
import bcrypt from 'bcryptjs';

//getting an express router

const router = Router();



// using  asyncehandler to make sure that our database and app are async
router.get("/seed", asyncHandler(
    async (req, res) => {
        const usersCount = await UserModel.countDocuments();
        if (usersCount > 0) {
            res.send("Seed is already done!");
            return;
        }
        sample_users.forEach(async user => {
            user.token = generateTokenResponse(user).token;
            await UserModel.create(user);
        });

        res.send("Seed Is Done!");
    }
))


router.post("/login", asyncHandler(
    async (req, res) => {
        // instead of accessing the body object to get its properties you can use this code to extract them and directly put their values in corresponding variables
        // this method called destruction of body
        const { email, password } = req.body;

        //const user = sample_users.find(user => user.email === email && user.password === password);

        const user = await UserModel.findOne({ email });

        if (user && (await bcrypt.compare(password, user.password))) {
            res.send(generateTokenResponse(user));
        }
        else {
            res.status(HTTP_BAD_REQUEST).send("Username or password is invalid!");
        }



    })
)

router.post('/register', asyncHandler(
    async (req, res) => {
        const { name, email, password, address } = req.body;
        const user = await UserModel.findOne({ email });
        if (user) {
            res.status(HTTP_BAD_REQUEST).send('User is already exists, Please login ! ');
            return;
        }

        const ecryptedPassword = await bcrypt.hash(password, 10);

        const newUser: User = {
            id: '',
            name,
            email: email.toLowerCase(),
            password: ecryptedPassword,
            token: '--',
            address,
            isAdmin: false

        }

        const dbUser = await UserModel.create(newUser);
        res.send(generateTokenResponse(dbUser));
    }

))

const generateTokenResponse = (user: any) => {
    const token = jwt.sign({
        email: user.email, isAdmin: user.isAdmin
    }, "PrivateKeyHere", {
        expiresIn: "30d"
    });

    user.token = token;
    return user;
}

export default router;