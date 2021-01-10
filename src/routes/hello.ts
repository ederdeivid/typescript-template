import { Router, Request, Response, NextFunction } from 'express'

const router = Router()

router.get('/hello', async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).send('OK')
    next()
  } catch (err) {
    console.error(err)
    res.status(500).send(err)
  }
})

export default router
