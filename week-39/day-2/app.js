const express = require('express');
const app = express();
const { createConnection } = require('mysql2/promise')


let connection = null
async function connectToDB(){
    try {
        connection = await createConnection({
            host: '127.0.0.1', //localhost
            user: 'root',
            password: 'root',
            database: 'attainu_database'
        })
        console.log("DB Connected")
    } catch (error) {
        console.log("Error", error)
    }
}
connectToDB()

app.get('/', async (req, res) => {

    const { courseId } = req.query
    console.log(`🚀 ~ app.get ~ courseId`, courseId)

    let sqlString = `SELECT * FROM courses`
    
    if (courseId) {
        sqlString += ` WHERE course_id=${courseId}`
    }

    

    // const resultSet = await connection.query(sqlString)
    const [results]  = await connection.query(sqlString)
    console.log(`🚀 ~ app.get ~ results`, results)

    res.json(results)
});


app.get('/getSQL', async (req, res) => {

    const { courseId, lectureNum } = req.query
    console.log(`🚀 ~ app.get ~ lectureNum`, lectureNum)
    console.log(`🚀 ~ app.get ~ courseId`, courseId)

    let sqlString = `SELECT * FROM courses WHERE course_id= ? AND number_lectures = ?`

    // const resultSet = await connection.query(sqlString)
    const [results]  = await connection.query(sqlString, [courseId, lectureNum])
    console.log(`🚀 ~ app.get ~ results`, results)

    res.json(results)
});

app.listen(5000, () => {
    console.log('Example app listening on port 5000!');
});

//Run app, then load http://localhost:5000 in a browser to see the output.