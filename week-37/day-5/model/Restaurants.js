const { model, Schema } = require('mongoose')

const RestaurantSchema = new Schema({
    "address": {
        "building": Schema.Types.String,
        "coord": [
            Schema.Types.Number
        ],
        "street": Schema.Types.String,
        "zipcode": Schema.Types.String
    },
    "borough": Schema.Types.String,
    "cuisine": Schema.Types.String,
    "grades": [{
        "date": Schema.Types.Date,
        "grade": Schema.Types.String,
        "score": Schema.Types.Number
    }],
    "comments": [
        {
            type: Schema.Types.ObjectId,
            ref: 'comment'
        }
    ],
    "name": Schema.Types.String,
    "restaurant_id": Schema.Types.String
})

const Restaurant = model('restaurant', RestaurantSchema)

module.exports = { Restaurant }