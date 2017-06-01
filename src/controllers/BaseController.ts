import { Response } from 'express'

/**
 * @class BaseController
 */
export default class BaseController {

  /**
   * @class BaseController
   * @method render
   * @protected
   *
   * @param {Response} res
   * @param {number} statusCode
   * @param {object} data
   *
   * @return {Response}
   */
  protected render(res: Response, statusCode: number, data?: object): Response {
    if (!data) return res.sendStatus(statusCode)

    return res.status(statusCode).json(data)
  }
}
