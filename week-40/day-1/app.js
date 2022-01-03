const express = require('express');
const { buildSchema, GraphQLFloat } = require('graphql')
const { graphqlHTTP } = require('express-graphql');

const Book = {
    fields: {
        name: "price",
        type: GraphQLFloat
    }
}

//mock database
const bookDb = [
    {
        id: "abcser132",
        bookName: "Harry Potter",
        price: 125.5
    },
    {
        id: "vnkasd4431",
        bookName: "For the love of Physics",
        price: 875.55
    }
]

const app = express();

// Construct the schema that GraphQL will use/understand
// using the GraphQL Schema definition language
const mySchema = buildSchema(`
    type Book {
        id: String,
        bookName: String,
        price: Float
    }    

    type Query{
        books: [Book]
    }

    type Mutation{
        addBook(name: String, price: Float): Book
    }
`)

// Define resolver functions for corresponding query fields to obtain the values for that field
const rootResolvers = {
    books: () => {
        return bookDb
    },
    addBook: ( { name, price  } ) => {

        const id = "9687654zxczxcasd"
        
        const newLength = bookDb.push({id, bookName: name, price})

        return bookDb[newLength - 1]
    }
}


app.use('/graphql',  graphqlHTTP({
    schema: mySchema,
    rootValue: rootResolvers,
    graphiql: true
}) )


app.listen(5000, () => {
    console.log("Listening")
});