// Import dependancies
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')

// Schema
const schema = buildSchema(
    type Todo{
        name: String!
        completed: Boolean
        date: String
        id: Int
    }
)
