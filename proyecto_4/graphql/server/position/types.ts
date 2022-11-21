import { gql } from 'apollo-server-micro';

const PositionTypes = gql`
  type Position {
    id: ID
    name: String
    users: [User]
  }

  input PositionCreateInput {
    name: String!
  }

  input PositionUpdateInput {
    name: String!
  }

  type Query {
    getPosition(id: String): Position
    getPositions: [Position]
  }

  type Mutation {
    createPosition(data: PositionCreateInput): Position
    updatePosition(id: String, data: PositionUpdateInput): Position
    deletePosition(id: String): Position
  }
`;

export { PositionTypes };
