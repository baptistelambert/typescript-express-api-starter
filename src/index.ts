import * as chalk from 'chalk'

import * as configData from '../config/config.json'
import Database from './Database'
import Server from './Server'

const config: any = (configData as any)
const dbConfig: any = config.database

const db: Database = new Database(dbConfig.name, dbConfig.host, dbConfig.port, dbConfig.user, dbConfig.pass)
const server: Server = Server.bootstrap()

db
  .connect()
  .then(() => {
    server.run(config.port, () => {
      console.log(chalk.green(`[SERVER] Started on ${chalk.cyan(`http://localhost:${config.port}`)}`))
    })
  })
