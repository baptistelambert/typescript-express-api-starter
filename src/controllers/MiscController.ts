import { NextFunction, Request, Response } from 'express'

import BaseController from './BaseController'

/**
 * @class MiscController
 * @extends BaseController
 */
export default class MiscController extends BaseController {

  /**
   * Root handler.
   *
   * @class MiscController
   * @method rootHandler
   * @public
   *
   * @param {Request} req
   * @param {Response} res
   * @param {NextFunction} next
   *
   * @return {Response}
   */
  public rootHandler(req: Request, res: Response, next: NextFunction): Response {
    return super.render(res, 200, { message: 'This is the API root' })
  }

  /**
   * Not found handler.
   *
   * @class MiscController
   * @method notFoundHandler
   * @public
   *
   * @param {Request} req
   * @param {Response} res
   * @param {NextFunction} next
   *
   * @return {Response}
   */
  public notFoundHandler(req: Request, res: Response, next: NextFunction): Response {
    return super.render(res, 404)
  }
}
