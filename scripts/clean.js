const { readdirSync, unlinkSync, readFileSync } = require("fs");
const { join } = require("path");
const rootDir = join(__dirname, '../')
const _ = require('lodash')

const findAllFileInFolder = (dir, pattern) => {
    const content = readdirSync(dir, { withFileTypes: true })
    return content.filter(x => x.isFile() && (!pattern || x.name.indexOf(pattern) > -1)).map(x => x.name)
}

const getAllDirectory = (dir) => {
    const content = readdirSync(dir, { withFileTypes: true })
    return content.filter(x => x.isDirectory()).map(x => x.name)
}
const cleanTests = (dir) => {
    const directories = getAllDirectory(dir)
    const files = findAllFileInFolder(dir, '.test.ts')
    if (files) {
        files.forEach(x => {
            const file = join(dir, x)
            console.log('Deleted ', file);
            unlinkSync(file, (c) => {
                console.log('Deleted ', x);
            })
        })
    }

    if (directories) {
        directories.forEach(x => {
            cleanTests(join(dir, x))
        })
    }
}

const setEnv = (dir) => {
    const directories = getAllDirectory(dir)
    const env = findAllFileInFolder(dir, '.env')
    const example = findAllFileInFolder(dir, '.env.example')
    const envContent = _.isEmpty(env) ? '' : readFileSync(join(dir, env[0])).toString()
    const sampleContent = _.isEmpty(example) ? '' : readFileSync(join(dir, example[0]))
    if (env || example || envContent || sampleContent) {
        debugger
    }

    if (directories) {
        directories.forEach(x => {
            setEnv(join(dir, x))
        })
    }
}

cleanTests(rootDir)