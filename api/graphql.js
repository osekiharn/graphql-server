const { ApolloServer, gql } = require('apollo-server-koa');
const typeDefs = require('./schema');

const resolvers = {
  Query: {
    users: require('./resolvers/users'),
    user: require('./resolvers/user'),
  }
}

module.exports = new ApolloServer({
  typeDefs,
  resolvers
});
