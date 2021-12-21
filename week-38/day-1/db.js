const { connect } = require('mongoose')


const connectDatabase = async () => {
    
    try {
        const result = await connect(process.env.DATABASE_URL)
        
        console.log(`🚀 ~ connectDatabase ~ Connected`)
        return result.connection.db
    } catch (error) {
        console.log(error)
    }
    
}

module.exports = { connectDatabase }