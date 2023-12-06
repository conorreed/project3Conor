//TODO: double check save char logic


const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    characters: [Character]!
    
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



  type Query {
    users: [User]
    singleUser(_id: ID!): User
    
    singleCharacter(_id: ID!): Character
    getAllCharacters: [Character]
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    
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

      deleteUser(
        username: String
        email: String
        password: String
        ) :User

        addCharacter(
          userId: ID!,
          characterId: ID!
          ): User
    
  }
  
`

module.exports = typeDefs;

// input inputCharacter {
//   name: String
//   health: Int
//   attack: Int
//   image: String

// }
// saveCharacter(username: String!, newCharacter: inputCharacter!): Character