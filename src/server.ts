import app from './app'
import chalk from 'chalk'
import { pad } from 'lodash'
import msg from 'gulp-messenger'

app.set('port', 5015)
app.listen(app.get('port'), (): void => {
  msg.log('\n')
  console.log(`${chalk.cyan('[SERVER: App] Initilized ')}${new Date()}`)
  msg.log('\n')
  const info = chalk.magenta(`http://localhost:${app.get('port')}`)
  msg.success('=', pad(`Running at: ${info}`, 80), '=')
})
