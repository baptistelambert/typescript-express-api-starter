import * as chalk from 'chalk'

import Server from './Server'

const server = Server.bootstrap()

server.run(3000, () => {
  console.log(chalk.green(`Server now listening on ${chalk.cyan.underline.bold(`http://localhost:3000`)}`))
})
