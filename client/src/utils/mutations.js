import { gql } from '@apollo/client';






export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    user {
      email
      username
      password
    }
  }
}
`;
export const UPDATE_USER = gql`
mutation updateUser($username: String) {
  updateUser(username: $username) {
    username
    email
    _id
  }
}
`;
export const DELETE_USER = gql`
mutation deleteUser($username: String) {
  deleteUser(username: $username) {
    _id
    email
    password
    username
  }
}
`;