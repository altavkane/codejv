import { error } from "console"
import { NextFunction, Request, Response } from "express"
import joi from "joi"

// validation skema
let schema = joi.object({
    panjang: joi.number().required().min(1),
    lebar: joi.number().required().min(1),
    tinggi: joi.number().required().min(1),


})

// create validation function
let validateCube = (request: Request, response: Response, next: NextFunction) => {
    let { error } = schema.validate(request.body)
    if (error) {
        // status
        return response.status(400).json({
            message: error.details

        })
    }
    next()
}

export { validateCube }

