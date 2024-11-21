import { Router } from 'express'
import { sendHelloWorld } from '../services'

export const messagesRouter = Router()

/**
 * `POST https://<url>/messages/send` endpoint
 */
messagesRouter.post('/send', (_req, res, next) => {
  sendHelloWorld()
    .then(() => res.status(200).end())
    .catch(next)
})
