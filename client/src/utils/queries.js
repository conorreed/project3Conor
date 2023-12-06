import { gql } from '@apollo/client';

export const GET_SINGLE_USER = gql`
query singleUser($id: ID!) {
  singleUser(_id: $id) {
    _id
    email
    username
    characters {
      _id
      image
    }

  }
}
`;

export const GET_ALL_USER = gql`
query Users {
    users {
      _id
      email
      username
      characters {
      _id
      image
    }
    }
  },
  `;
  