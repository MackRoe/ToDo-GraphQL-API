# GraphQL ToDo-API

## Queries

**getAllTodos**

`query {
    getAllTodos {
        name
        completed
        date
        id
    }
    }`

**getCompletedTodos**

`query {
    getCompletedTodos {
        name
        completed
        date
        id
    }
    }`

**getTodo**

`query {
    getTodo(id: 1) {
        name
        completed
        date
        id
    }
    }`

**addTodo**

`mutation {
  addTodo(name: "Complete Final Assignment") {
    name
    completed
    date
    id
  }
}`

**completeTodo**

`mutation {
  completeTodo(id: 2) {
    name
    completed
    date
    id
  }
}`
