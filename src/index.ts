import dotenv from 'dotenv'
import express, { Application, Request } from 'express'
const app: Application = express()
dotenv.config()

const port = process.env.PORT || 2000

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome from our server')
})

app.listen(port, () => {
  console.log(`Sever running port is: ${port}`)
})
