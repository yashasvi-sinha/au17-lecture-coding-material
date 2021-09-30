const fileSystem = require('fs')

const data = fileSystem.readFileSync('test.csv')

// console.log(data)

// fileSystem


fileSystem.writeFileSync('copyOfCSVDATA.csv', data)