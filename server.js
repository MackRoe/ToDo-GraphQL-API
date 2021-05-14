// Import dependancies
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')

// Schema
const schema = buildSchema(`
    type Todo {
        name: String!
        completed: Boolean
        date: String
        id: Int
    }

    type Mutation {
        addTodo(name: String!): Todo
        completeTodo(id: Int!): Todo
    }

    type Query {
        getAllTodos: [Todo]
        getTodo(id: Int!): Todo
        getCompletedTodos: [Todo]
    }`)

// starting data
const data = [
	{ name: 'Sample Item', completed: true, date: new Date(), id: 1 },
    { name: 'Next', completed: false, date: new Date(), id: 2}
]

// Resolvers
const root = {
    getAllTodos: () => {
        return data
    },
    getTodo: ({ id }) => {
        return data[id]
    },
    getCompletedTodos: () => {
        completedItems = []
        for (let i = 0; i < data.length; i++){
            if (data[i].completed === true) {
                completedItems.push(data[i])
            }
        }
        return completedItems
    },
    addTodo: ({ name }) => {
        const newTodo = {
            name: name,
            completed: false,
            date: new Date(),
            id: data.length + 1
        }
        data.push(newTodo)
        return newTodo
    },
    completeTodo: ({ id }) => {
        const index = id -1
        data[index].completed = true
        return data[index]
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
    console.log(`ToDo-API running on port: ${port}`)
})
