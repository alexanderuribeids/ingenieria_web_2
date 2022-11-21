import { gql } from 'apollo-server-micro';

const CommentTypes = gql`
  type Comment {
    id: ID
    text: String
    user: User
    training: Training
  }

  input CommentCreateInput {
    text: String!
    user_id: String!
    training_id: String!
  }

  input CommentUpdateInput {
    text: String
    user_id: String
    training_id: String
  }

  type Query {
    getComment(id: String): Comment
    getComments: [Comment]
  }

  type Mutation {
    createComment(data: CommentCreateInput): Comment
    updateComment(id: String, data: CommentUpdateInput): Comment
    deleteComment(id: String): Comment
  }
`;
export { CommentTypes };
