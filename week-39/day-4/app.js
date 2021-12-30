const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
const allSchema = buildSchema(`
  type Query {
    userName: String,
    email: String
    age: Int,
    getLowerString(strToLower: String): String
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  userName: () => {
    return 'WierdStuff';
  },
  email: () => 'yash@a.com',
  age: () => 43,
  getLowerString: (args) => {

    return args.strToLower.toLowerCase()
  }
};

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: allSchema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');