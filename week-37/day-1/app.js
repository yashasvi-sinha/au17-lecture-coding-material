// const { readFileSync, readFile, writeFileSync, mkdir, appendFileSync, unlinkSync } = require('fs')


//Reading Files


/* Sync Approach */
// console.log('Reading File')
// const data = readFileSync('sample.txt', { encoding: 'utf8' }) 
// console.log(data)
// console.log('Reading File Completed')


/* Async Approach */


// console.log('Reading File')

// readFile('sample.txt', { encoding: 'utf8' }, (err, data) => {
//     //error first approach
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log(data)
// })

// console.log('Reading File Completed')
// console.log(data.toJSON().data.toString())


//Writing
// const textToBeWritten = "Not So Weird Lecture!!!!"


// mkdir('test/test2/test3', {recursive: true}, (err) => {

//     if (err) {
//         console.log(err)
//         return
//     }

//     // writeFileSync('allFiles/lecture.txt', textToBeWritten)

// })

// writeFile('name.txt', textToBeWritten, (err) => {

// })






// appendFileSync('sample.txt', '\n\nThis is a new Text')


// unlinkSync('lecture.txt')



const { readFile } = require('fs/promises')
const csvParser = require('csvtojson')
async function test() {
    
    // const data = await readFile('sample.txt', 'utf8')
    // console.log(`🚀 ~ data`, data)


    // const data = await readFile('train.csv', 'utf8')
    // console.log(`🚀 ~ data`, data)

    const data = await csvParser().fromFile('train.csv')
    console.log(data[0])
    // console.log(`🚀 ~ test ~ data`, data)

}

test()

