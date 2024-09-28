// const os = require('os')

// const {totalmem} = require('os')

// console.log(os.freemem())

// console.log(totalmem())

// console.log(os.homedir())

// console.log(os.hostname())

const path = require('path')

// console.log(__dirname)
// console.log(__filename)

const extentionName = path.extname('index.css');

console.log(extentionName)

const joinName = path.join(__dirname+ '/new')
console.log(joinName)

const joinName2 = path.join(__dirname+ '/../new')
console.log(joinName2)