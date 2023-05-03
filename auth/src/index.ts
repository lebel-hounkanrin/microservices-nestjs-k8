import express from "express";
import { json } from "body-parser";
import { signinRouter } from "./routes/signin";
import { signupRouter } from "./routes/signup";
import { signoutRouter } from "./routes/signout";
import { currentUserRouter } from "./routes/currenr-user";

const app = express();
app.use(json());
app.use(signinRouter)
app.use(signupRouter)
app.use(signoutRouter)
app.use(currentUserRouter) 


app.listen(3000, ()=> {
    console.log("auth app listening on port 3000")
})
