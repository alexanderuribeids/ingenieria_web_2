import { gql } from 'apollo-server-micro';

const CourseStateTypes = gql`
  type CourseState {
    id: ID
    is_completed: Boolean
    certificated: Boolean
    certificate_link: String
    course: Course
    user: User
  }

  input CourseStateCreateInput {
    is_completed: Boolean!
    certificated: Boolean!
    certificate_link: String!
    course_id: String!
    user_id: String!
  }

  input CourseStateUpdateInput {
    is_completed: Boolean
    certificated: Boolean
    certificate_link: String
    course_id: String
    user_id: String
  }

  type Query {
    getCourseState(id: String): CourseState
    getCourseStates: [CourseState]
  }

  type Mutation {
    createCourseState(data: CourseStateCreateInput): CourseState
    updateCourseState(id: String, data: CourseStateUpdateInput): CourseState
    deleteCourseState(id: String): CourseState
  }
`;

export { CourseStateTypes };
