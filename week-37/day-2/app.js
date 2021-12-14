const { readFileSync, createReadStream, createWriteStream } = require('fs')
const express = require('express');
const { response } = require('express');
const app = express();


// const data = readFileSync('combined_data_4.txt', 'utf8')

// console.log(data[0])




//instance of ReadStream to read a file/data
// const readStream = createReadStream('combined_data_4.txt', 'utf8')
// // const readStream = createReadStream('sample.txt', 'utf8')

// readStream.on('data', (part) => {
//     console.log('Next Data is ready')
//     console.log(part)

// })


// readStream.on('open', () => {
//     console.log('Ready for Processing')
// })

// readStream.on('close', () => {
//     console.log('Processing Completed')

// })

// setTimeout(() => {

//     readStream.pause()

//     setTimeout(() => {

//         const chunk = readStream.read()
//         console.log(`🚀 ~ setTimeout ~ chunk`, chunk)

//     }, 5000)

// }, 5000)



// const wStream = createWriteStream('logs.txt', 'utf8')

// // for (let index = 0; index < 500000; index++) {
    
// //     wStream.write(`\nTimeStamp: ${new Date().toLocaleTimeString()}`)
// // }

// setInterval(() => {
//     wStream.write(`\nTimeStamp: ${new Date().toLocaleTimeString()}`)

// }, 1000);

// app.get('/', (req, res) => {
    
//     wStream.end()
//     res.send('Stream Closed')

// })




// app.listen(4000, () => {
//     console.log('Example app listening');
//     console.log('Process Id ', process.pid)
// });







//Run app, then load http://localhost:port in a browser to see the output.













const sampleWriteStream = createWriteStream('sample.txt', 'utf8')
const logsReadStream = createReadStream('logs.txt', 'utf8')

// Novice approach
// logsReadStream.on('data', (chunk) => {
//     sampleWriteStream.write(chunk)
// })

logsReadStream.pipe(sampleWriteStream)


