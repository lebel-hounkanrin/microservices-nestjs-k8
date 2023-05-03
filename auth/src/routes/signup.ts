import express, {Request, Response} from "express";
import { body } from "express-validator";

const router = express.Router();

router.post("api/users/signup", [
    body("email").isEmail().withMessage("email must be valid"),
    body("password").trim().isLength({min: 4, max: 20}).withMessage("password lenght must be betwenn 4 and 20")
], (req: Request, res: Response) => {
    const {email, password} = req.body
    res.send("signup ...")
});

export {router as signupRouter};