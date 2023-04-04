import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { Pool } from 'pg'

const app: Express = express()

app.use(cors())
app.use(express.static("public"))

const port = 3001

app.get('/',(req: Request, res: Response) => {
  res.status(200).json({result: 'success'})
})

const openDb = (): Pool => {
  const pool: Pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'demo',
    password: 'root',
    port: 5435
  })
  return pool
}







app.listen(port)