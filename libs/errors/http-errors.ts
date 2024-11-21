export abstract class HttpError extends Error {
  readonly abstract status: number
}

export class BadRequestError extends HttpError {
  status = 400
}

export class ConflictError extends HttpError {
  status = 409
}

export class ForbiddenError extends HttpError {
  status = 403
}

export class NotFoundError extends HttpError {
  status = 404
}

export class UnauthorizedError extends HttpError {
  status = 401
}
