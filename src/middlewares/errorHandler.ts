import { Request, Response, NextFunction } from "express"

const errors = {
  unauthorized: 401,
  forbidden: 403,
  not_found: 404,
  conflict: 409,
  unprocessable: 422,
}

export function errorUnauthorized(message: string = null) {
  throw { type: "unauthorized", message }
}

export function errorForbidden(message: string = null) {
  throw { type: "forbidden", message }
}

export function errorNotFound(message: string = null) {
  throw { type: "not_found", message }
}

export function errorConflict(message: string = null) {
  throw { type: "conflict", message }
}

export function errorUnprocessable(message: string = null) {
  throw { type: "unprocessable", message }
}

export default function errorHandler(error, req: Request, res: Response, next: NextFunction) {
  if (error.type) {
    return error.message
      ? res.status(errors[error.type]).send(error.message)
      : res.sendStatus(errors[error.type])
  }

  res.sendStatus(500)
}
