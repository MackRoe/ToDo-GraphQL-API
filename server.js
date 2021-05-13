// Import dependancies
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')

// Schema
const schema = buildSchema(`
    type Todo {
        name: String!
        completed: String
        date: String
        id: Int
    }

    type Query {
        getAllTodos: [Todo]
        getTodo(id: Int!): Todo
        getCompletedTodos: [Todo]
    }`)

// starting data
const data = [
	{ name: 'Sample Item', completed: 'True', date: new Date(), id: 1 },
    { name: 'Next', completed: 'False', date: new Date(), id: 2}
]

// Resolvers
const root = {
    getAllTodos: () => {
        return data
    },
    getTodo: ({ id }) => {
        return data[id]
    }
}

const app = express()

// GraphQL Route
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}))

// Start the app
const port = 4000
app.listen(port, () => {
    console.log('ToDo-API running on port: ${port}')
})
