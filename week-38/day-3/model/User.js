const { model, Schema } = require('mongoose')
const { hash } = require('bcrypt')

const UserSchema = new Schema({

    email: Schema.Types.String,
    user_password: Schema.Types.String

})


UserSchema.pre( "save", async function(next) {

    
    console.log(this)
    const hashedPass  = await hash(this.user_password, 10)
    console.log(`🚀 ~ UserSchema.pre ~ hashedPass`, hashedPass)
    this.user_password = hashedPass

    console.log("Executed Before save")

})


UserSchema.pre( "save", async function(next) {
    
    console.log("Testing")

})


UserSchema.pre('find', function() {
  
    this._startTime = Date.now() // 159657465465
})

UserSchema.post( 'find', function (docs){
    console.log('Found')
    // console.log(docs)

    console.log(`Time taken: ${ Date.now() - this._startTime }`)
} )


const User = model('user', UserSchema)

module.exports = { User }