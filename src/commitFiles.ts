import { spawn } from 'child_process'
import path from 'path'

const exec = async (cmd: string, args: string[] = []): Promise<number> =>
  new Promise((resolve, reject) => {
    const app = spawn(cmd, args, { stdio: 'inherit' })
    app.on('close', (code: number) => {
      if (code !== 0) {
        const err = new Error(`Invalid status code: ${code}`)
        Object.defineProperty(err, 'code', { value: code })
        return reject(err)
      }
      return resolve(code)
    })
    app.on('error', reject)
  })

const main = async (): Promise<number> => {
  return await exec('bash', [path.join(__dirname, './commit.sh')])
}

export default main
