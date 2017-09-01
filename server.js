var { graphql, buildSchema } = require('graphql')

// Constructing a schema using graphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello World!';
  },
};

graphql(schema, '{ hello }', root).then(res => {
  console.log(res);
});

