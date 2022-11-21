import { gql } from 'apollo-server-micro';

const NoteTypes = gql`
  type Note {
    id: ID
    text: String
    user: User
    course: Course
    likes: [Like]
  }

  input NoteCreateInput {
    text: String!
    user_id: String!
    course_id: String!
  }

  input NoteUpdateInput {
    text: String
    user_id: String
    course_id: String
  }

  type Query {
    getNote(id: String): Note
    getNotes: [Note]
  }

  type Mutation {
    createNote(data: NoteCreateInput): Note
    updateNote(id: String, data: NoteUpdateInput): Note
    deleteNote(id: String): Note
  }
`;

export { NoteTypes };
