/*
|--------------------------------------------------------------------------
| Configure hook
|--------------------------------------------------------------------------
|
| The configure hook is called when someone runs "node ace configure <package>"
| command. You are free to perform any operations inside this function to
| configure the package.
|
| To make things easier, you have access to the underlying "ConfigureCommand"
| instance and you can use codemods to modify the source files.
|
*/

import ConfigureCommand from '@adonisjs/core/commands/configure'
import { stubsRoot } from './stubs/main.js'

export async function configure(_command: ConfigureCommand) {
  const codemods = await _command.createCodemods()
  await codemods.defineEnvValidations({
    leadingComment: 'Logsnag environment variables',
    variables: {
      LOGSNAG_TOKEN: 'Env.schema.string()',
      LOGSNAG_PROJECT: 'Env.schema.string()',
    },
  })
  await codemods.defineEnvVariables({ LOGSNAG_TOKEN: '', LOGSNAG_PROJECT: '' })
  await codemods.makeUsingStub(stubsRoot, 'config/logsnag.stub', {})
  await codemods.updateRcFile((rc) => {
    rc.addProvider('@matfire/adonis-logsnag/logsnag_provider')
  })
}
