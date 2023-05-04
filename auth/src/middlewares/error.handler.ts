import { NextFunction, Request, Response } from "express";
import { RequestValidationError } from "../errors/request-validation-error";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof RequestValidationError){
        const formatedErrors = err.errors.map(error =>  {
            return {message: error.msg}
        })
    }
    res.status(400).send({
        message: err.message
    })
}