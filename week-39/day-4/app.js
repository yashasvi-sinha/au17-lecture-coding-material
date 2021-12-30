const express = require('express');
const { buildSchema } = require('graphql')
const { graphqlHTTP } = require('express-graphql');

const bookDb = [
    {
        "abcser132": {
            bookName: "Harry Potter",
            price: 125.5
        },
        "vnkasd4431": {
            bookName: "For the love of Physics",
            price: 875.55
        }
    }
]

const app = express();

// Construct the schema that GraphQL will use/understand
// using the GraphQL Schema definition language
const mySchema = buildSchema(`
    type Query{
        userName: String,
        email: String,
        age: Int,
        price: Float,
        convertToLower(strToLower: String!, removeSpace: Boolean): String
    }
`)

// Define resolver functions for corresponding query fields to obtain the values for that field
const rootResolvers = {
    convertToLower: (argv) => {
        console.log(`🚀 ~ argv`, argv)
        let convertLowerString = argv.strToLower.toLowerCase()
        console.log(`🚀 ~ convertLowerString`, convertLowerString)
        
        if (argv.removeSpace === true) {
            convertLowerString = convertLowerString.replaceAll(" ", "")
            console.log(`🚀 ~ Remove Space convertLowerString`, convertLowerString)
        }

        return convertLowerString
    },
    userName: () => {
        
        return "pasta123"
    },
    email: () => {
        return "abc@pqr.com"
    },
    age: () => {
        return 55
    },
    price: () => 79.66
}


app.use('/graphql',  graphqlHTTP({
    schema: mySchema,
    rootValue: rootResolvers,
    graphiql: true
}) )


app.listen(5000, () => {
    console.log("Listening")
});