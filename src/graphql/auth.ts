import { gql } from '@apollo/client';

export const VERIFY_TOKEN = gql`
  mutation verifyToken($token: String!) {
    verifyToken(token: $token) {
      id
      firstName
      lastName
      username
      email
      phone
      age
      gender
      token
      since
    }
  }
`

export const LOG_IN_USER = gql`
  mutation login(
    $phoneEmailOrUsername: String!
    $password: String!
    ) {
    login(loginInput: { 
      phoneEmailOrUsername: $phoneEmailOrUsername 
      password: $password
      }) {
        id
        firstName
        lastName
        username
        age
        gender
        token
        since
    }
  }
`;

export const REGISTER_USER = gql`
  mutation register(
    $id: ID!
    $firstName: String!
    $lastName: String!
    $username: String!
    $email: String!
    $phone: String!
    $dob: String!
    $gender: String!
    $token: String
    $createdAt: String
    $updatedAt: String
    ) {
    register(registerInput: { 
      username: $username 
      firstName: $firstName
      lastName: $lastName
      username: $username
      email: $email
      phone: $phone
      dob: $dob
      gender: $gender
      }) {
      id
      firstName
      lastName
      username
      age
      gender
      token
      since
    }
  }
`;