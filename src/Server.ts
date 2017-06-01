import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as express from 'express'
import * as http from 'http'

import router from './router'

/**
 * @class Server
 */
export default class Server {

  /**
   * Return a new instance of Server
   *
   * @class Server
   * @method bootstrap
   * @static
   *
   * @return {Server}
   */
  public static bootstrap(): Server {
    return new Server()
  }

  private app: express.Application

  /**
   * Constructor.
   *
   * @class Server
   * @constructor
   * @public
   */
  public constructor() {
    this.app = express()
    this.config()
  }

  /**
   * Run the server.
   *
   * @class Server
   * @method run
   * @public
   *
   * @param {number} port
   * @param {Function} [callback]
   *
   * @return {http.Server}
   */
  public run(port: number, callback?: () => void): http.Server {
    if (callback) return this.app.listen(port, callback)

    return this.app.listen(port)
  }

  /**
   * Initialize server config.
   *
   * @class Server
   * @method config
   * @private
   *
   * @return {Void}
   */
  private config(): void {
    /** Register lib middlewares */
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: true }))
    this.app.use(cors())

    /** Register application router */
    this.app.use('/', router)
  }
}
