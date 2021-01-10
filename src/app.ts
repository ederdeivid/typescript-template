import cors from 'cors'
import express from 'express'
import bodyParser from 'body-parser'

import routes from './routes'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()
    this.Middlewares()
    this.Routes()
  }

  private Middlewares (): void {
    this.express.use(cors())
    this.express.use(bodyParser.json())
    this.express.use(bodyParser.urlencoded({ extended: true }))
  }

  private Routes (): void {
    this.express.use(routes)
  }
}

export default new App().express
