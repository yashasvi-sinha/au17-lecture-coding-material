const { connect } = require('mongoose')


const connectDatabase = async () => {
    
    try {
        const result = await connect(process.env.DATABASE_URL)
        console.log(`🚀 ~ connectDatabase ~ Connected`)
    } catch (error) {
        console.log(error)
    }
    
}

module.exports = { connectDatabase }