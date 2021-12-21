require('dotenv').config();
const { connectDatabase } = require('./db');

const express = require('express');
const { Schema, model } = require('mongoose');
const app = express();

connectDatabase()
const moviesSchema = new Schema({
    "title": Schema.Types.String,
    "year": Schema.Types.Number,
    "runtime": Schema.Types.Number,
    "released": Schema.Types.Date,
    "poster": Schema.Types.String,
    "plot": Schema.Types.String,
    "fullplot": Schema.Types.String,
    "lastupdated": Schema.Types.String,
    "type": Schema.Types.String,
    "directors": [Schema.Types.String],
    "imdb": {
        "rating": Schema.Types.Number,
        "votes": Schema.Types.Number,
        "id": Schema.Types.Number,
    },
    "cast": [Schema.Types.String],
    "countries": [Schema.Types.String],
    "genres": [Schema.Types.String],
    "tomatoes": {
        "viewer": {
            "rating": Schema.Types.Number,
            "numReviews": Schema.Types.Number
        },
        "lastUpdated": Schema.Types.Date
    },
    "num_mflix_comments": Schema.Types.Number
    });

const Movie = model('movie', moviesSchema);

app.get('/', async (req, res) => { 


    // const yearQuery = {
    //     year: {
    //         $gte: 2000
    //     }
    // }

    // const imdbQuery = {
    //     imdb: {
    //         rating: {
    //             $gte: 6
    //         }
    //     }
    // }

    // const movies = await Movie.find( { $or: [ yearQuery,  imdbQuery ] } ).limit(3)


    //Example 1
    // const aggregateResult = await Movie.aggregate([
    //     //Stage 1 find all those doc which are having year as 2010
    //     {
    //         $match: { 
    //             year: 2000,
    //             // imdb: {
    //             //     rating: {
    //             //         $gte: 4
    //             //     }
    //             // },
    //             "imdb.rating": { $gte: 7 }
    //         }
    //     },
    //     //Stage 2 Limit to 5 doc only
    //     {
    //         $limit: 5
    //     },
    //     //Stage 3
    //     {
    //         $match: {
    //             "awards.wins": { $gte: 40 }
    //         }
    //     }
    // ])


    //Example 2 (Joining 2 collection)
    const aggregateResult = await Movie.aggregate([
        //Stage 1 find all those doc where year is 2015, and no of comments > 2
        {
            $match:  { 
                year: 2015, 
                num_mflix_comments: { 
                    $gt: 2 
                } 
            }
        },
        //Stage 2 Join with Comments
        {
            $lookup: {
                from: "comments",
                localField: "_id",
                foreignField: "movie_id",
                as: "movie_comments"
            }
        },
        //Stage 3 Projection Stage
        {
            $project: {
                title: true,
                num_mflix_comments: true,
                movie_comments: true
            }
        }

    ])

   
    res.send(aggregateResult)
});

app.listen(5000, () => {
    console.log('Example app listening on port 5000!');
});

//Run app, then load http://localhost:5000 in a browser to see the output.
