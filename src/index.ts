import dotenv from 'dotenv'
import express, { Application, Request, Response } from 'express'
const app: Application = express()
dotenv.config()

const data =
  'Prior to version 10, tasks had to manually include git add as the final step. This behavior has been integrated into lint-staged itself in order to prevent race conditions with multiple tasks editing the same files. If lint-staged detects git add in task configurations, it will show a warning in the console. Please remove git add from your configuration after upgrading.'

const port = process.env.PORT || 2000

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome from our server')
})

app.get('/blog', (req: Request, res: Response) => {
  res.send(data)
})

app.listen(port, () => {
  console.log(`Sever running port is: ${port}`)
})
