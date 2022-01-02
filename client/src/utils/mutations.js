import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login($email: String!, $password: String!) {
      token
      user{
          _id
          username
      }
      
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($input: SavedBookInput!) {
    createVote($input: SavedBookInput!) {
     _id
     username
     email
     savedbooks {
        bookId
        title
        authors
        image
        description
        link  
     }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    createVote($bookId: String!) {
     _id
     username
     email
     savedbooks {
        bookId
        authors
        image
        description
        title
        link  
     }
    }
  }
`;
