import fs from 'fs'
import path from 'path'
import chalk from 'chalk'

export default function (target, options) {

    let dest = path.join(process.cwd(), target)

    if (fs.existsSync(dest) && !(options.force || options.writeBack)) {
        let msg = `Can't overwrite existing ${target} (use -f to force or -w to write back)`
        console.log(chalk.yellow(msg))
        process.exit(1)
    }

    return true
}