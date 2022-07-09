import { Request, Response, NextFunction } from "express"
import Joi from "joi"

export default function validateSchema(schema: Joi.ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.validate(req.body, { abortEarly: false, convert: false })
    if (validation.error) {
      return res.status(422).send(validation.error.details.map((e) => e.message))
    }

    next()
  }
}
