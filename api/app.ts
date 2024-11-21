import express from 'express'
import { errorHandler } from './middlewares/error-handler'
import { messagesRouter } from './routers'

export const app = express()

app.get('/health', (_req, res) => {

  res.status(200).json('Healthy')
})

app.use(express.json())

app.use('/messages', messagesRouter)

app.use(errorHandler)
