import express from 'express'

import hello from './hello'

const routes = express()

routes.use('/v1', [
  hello
])

export default routes
