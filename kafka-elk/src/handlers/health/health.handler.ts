import { Request, Response } from 'express'

export default class HealthHadler {
  public health(_req: Request, res: Response): Response<{ status: string }> {
    return res.json({
      status: 'up',
    })
  }
}
