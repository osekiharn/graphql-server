const { gql } = require('apollo-server-koa');

// shemaファイルから持ってくる場合
// const typeDefs = gql(fs.readFileSync(`${__diranme}/schema.graphql`, 'utf-8'));

const schema = gql`
    type Query {
        users: [User!]!,
        user(id: Int!): User!
    }

    type User {
        id: ID!
        name: String!
        email: String
        posts: [Post!]
    }

    type Post {
        id: ID!
        title: String!
        published: Boolean!
        link: String
        author: User!
    }
`;

module.exports = schema;