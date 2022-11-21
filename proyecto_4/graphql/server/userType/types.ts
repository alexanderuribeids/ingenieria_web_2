import { gql } from 'apollo-server-micro';

const UserTypeTypes = gql`
  type UserType {
    id: ID
    name: String
    users: [User]
  }

  input UserTypeCreateInput {
    name: String!
  }

  input UserTypeUpdateInput {
    name: String!
  }

  type Query {
    getUserType(id: String): UserType
    getUserTypes: [UserType]
  }
  type Mutation {
    createUserType(data: UserTypeCreateInput): UserType
    updateUserType(id: String, data: UserTypeUpdateInput): UserType
    deleteUserType(id: String): UserType
  }
`;

export { UserTypeTypes };
