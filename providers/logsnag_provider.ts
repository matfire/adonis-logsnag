import { ApplicationService } from '@adonisjs/core/types'
import { LogsnagConfig } from '../src/types/main.js'
import { LogSnag } from '@logsnag/node'

declare module '@adonisjs/core/types' {
  interface ContainerBindings {
    logsnag: LogSnag
  }
}
export default class LogsnagProvider {
  constructor(protected app: ApplicationService) {}

  register() {
    this.app.container.singleton('logsnag', async () => {
      const config = this.app.config.get<LogsnagConfig>('logsnag', {})
      const l = new LogSnag({ token: config.token, project: config.project })
      return l
    })
  }
}
