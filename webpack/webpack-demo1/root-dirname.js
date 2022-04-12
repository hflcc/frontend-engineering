import {dirname} from 'path'

const dn = dirname(new URL(import.meta.url).pathname)
const __dirname = process.platform === 'win32' ? dn.substr(1) : dn // remove the leading slash on Windows
export {
  __dirname
}
