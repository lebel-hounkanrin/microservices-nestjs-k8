import express from "express";
import { json } from "body-parser";
import { signinRouter } from "./routes/signin";
import { signupRouter } from "./routes/signup";
import { signoutRouter } from "./routes/signout";
import { currentUserRouter } from "./routes/currenr-user";
import { errorHandler } from "./middlewares/error.handler";
import mongoose from "mongoose"

const app = express();
app.use(json());
app.use(signupRouter)
app.use(signinRouter)
app.use(signoutRouter)
app.use(currentUserRouter) 
app.use(errorHandler);


const start = async () => {
    try{
        mongoose.connect("mongodb://auth-mongo-srv:27017/auth");
    } catch(err){
        console.error("Couldn't connect to mongodb")
    }

    app.listen(3000, ()=> {
        console.log("auth app listening on port 3000")
    })
}

start();


