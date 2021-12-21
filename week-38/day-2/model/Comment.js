const { model, Schema } = require('mongoose')

const CommentSchema = new Schema({
    commentText: Schema.Types.String,
    noOfLikes: {
        type: Schema.Types.String,
        default: 0
    }
})

const Comment = model('comment', CommentSchema)

module.exports = { Comment }