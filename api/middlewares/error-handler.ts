import type { Request, Response, NextFunction } from 'express'
import { HttpError } from '../../libs/errors'
import { logger } from '../../libs/utils/logger'

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  next: NextFunction
): void {
  if (res.headersSent) return next(err)

  logger.error(err, err.constructor.name + ' :: ' + err.message)

  /*
    Normalmente usaremos Sentry para captura de erros,
    leia a doc e aplique se necessário:
    https://docs.sentry.io/platforms/javascript/guides/node/
  */

  if (err instanceof HttpError) {
    res.status(err.status).json({ message: err.message })
  }

  /*
    Aqui você pode adicionar tratamento de erros, um que
    costumo usar é o `ValidationError` do `yup`, que é
    um erro que o `yup` lança quando o schema não é
    válido.
    Leia mais em:
    https://www.npmjs.com/package/yup
  */
}
