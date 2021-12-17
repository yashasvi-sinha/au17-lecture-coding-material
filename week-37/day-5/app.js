require('dotenv').config();

const express = require('express');
const { connectDatabase } = require('./db');
const { Comment } = require('./model/Comment');
const { Restaurant } = require('./model/Restaurants');
const app = express();

connectDatabase()

app.use(express.json())

//get specific restaurant
app.get('/restaurant/:uniqueId', async (req, res) => {
    
    // const foundRest = await Restaurant.find({restaurant_id: req.params.restaurant_id })
    
    const foundRest = await Restaurant.findById(req.params.uniqueId)

    res.json(foundRest)
});


//POST route to add a comment for a restaurant
app.post('/restaurant/:uniqueId/comment', async (req, res) => {

    const restId = req.params.uniqueId

//    const result = await Restaurant.updateOne({ _id: restId } , { $push: { comments: req.body.commentText } })


    //add comment to the database first
    const addedComment = await Comment.create(req.body)
    console.log(`🚀 ~ app.post ~ addedComment`, addedComment)

    //update the restaurant comments array by specifying the comment id of the newly added comment in the
    // previous step
    const updateRest = await Restaurant.updateOne({ _id: restId }, { $push: { comments: addedComment._id }})
    
    console.log(`🚀 ~ app.post ~ updateRest`, updateRest)


    res.json(updateRest)
})


app.listen(5000, () => {
    console.log('App listening on 5000!');
});
