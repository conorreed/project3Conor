//TODO: double check save char logic
// type User {
//   _id: ID!
//   username: String!
//   email: String!
//   characters: [Character]!
// }
// type Query {
//   users: [User]
//   singleUser(_id: ID!): User
//   characters: [Character]
//   singleCharacter(_id: ID!): Character
// }

const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String!
    
  }

  type Auth {
    token: ID!
    user: User
  }

  type Character {
    _id: ID!
    name: String
    health: Int
    attack: Int
    image: String
  }

  input inputCharacter {
    name: String
    health: Int
    attack: Int
    image: String

  }

  type Query {
    users: [User]
    singleUser(_id: ID!): User
    
    singleCharacter(_id: ID!): Character
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    
    addUser(
      username: String!
      email: String!
      password: String!
    ): Auth

    updateUser(
      username: String
      email: String
      password: String
      ) :User
    
    saveCharacter(username: String!, newCharacter: inputCharacter!): Character
  }
  
`

module.exports = typeDefs;