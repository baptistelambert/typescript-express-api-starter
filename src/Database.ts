import * as chalk from 'chalk'
import * as mongoose from 'mongoose'

/**
 * @class Database
 */
export default class Database {

  private name: string
  private host: string
  private port: number
  private user: string
  private pass: string

  /**
   * Constructor.
   *
   * @class Database
   * @constructor
   * @public
   *
   * @param {string} name
   * @param {string} host
   * @param {number} port
   * @param {string} user
   * @param {string} pass
   */
  public constructor(
    name: string,
    host: string,
    port: number,
    user: string,
    pass: string,
  ) {
    this.name = name
    this.host = host
    this.port = port
    this.user = user
    this.pass = pass
  }

  /**
   * Connect to MongoDB.
   *
   * @class Database
   * @method connect
   * @public
   *
   * @return {Promise<void>}
   */
  public connect(): Promise<void> {
    const uri: string = `mongodb://${this.host}:${this.port}/${this.name}`
    const options: object = {
      pass: this.pass,
      promiseLibrary: global.Promise,
      user: this.user,
    }

    return mongoose.connect(uri, options).then(
      () => console.log(chalk.green('[DATABASE] Connected.')),
      err => console.error(chalk.red('[DATABASE] Error.'), err),
    )
  }
}
