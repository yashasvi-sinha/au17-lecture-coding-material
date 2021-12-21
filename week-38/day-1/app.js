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

    //Find all movies... from the movies collection
    // const movies = await Movie.find().limit(3)
    
    
    //Finding Specific Documents based on keys/fields
    // const movies = await Movie.find({num_mflix_comments: 5, runtime: 97}).limit(3)
    // const movies = await Movie.find({ "rated": "PG-13" }).limit(3)
    
    
    //Projections in MongoDB
    //exclude keys
    // const movies = await Movie.find({num_mflix_comments: 5}, '-imdb.id -imdb.rating -cast -full-plot ').limit(3)
    
    //only include
    // const movies = await Movie.find({num_mflix_comments: 5}, 'fullplot title').limit(3)

    // Finding with comparison 
    // const movies = await Movie.find( { year: { $gte: 2000, $lte: 2005, $not: 2003, $not: 2004 } } ).limit(3)
    

    const yearQuery = {
        year: {
            $gte: 2000
        }
    }

    const imdbQuery = {
        imdb: {
            rating: {
                $gte: 6
            }
        }
    }

    const movies = await Movie.find( { $or: [ yearQuery,  imdbQuery ] } ).limit(3)
    
    res.send(movies)
});

app.listen(5000, () => {
    console.log('Example app listening on port 5000!');
});

//Run app, then load http://localhost:5000 in a browser to see the output.
