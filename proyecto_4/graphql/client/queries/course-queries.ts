import { gql } from '@apollo/client';

const getAllCourses = gql` 
query coursesQuery {
  getCourses {
    id 
    name
    duration
    link
  }
}
`;
const CreateCourse = gql` 
mutation CreateCourse($data: CourseCreateInput) {
  createCourse(data: $data) {
    id
    name
    duration
    link
  }
}
`;
const DeleteCourse = gql`
mutation DeleteCourse($id: String) {
  deleteCourse(id: $id) {
    id
    name
  }
}
`;

export { getAllCourses , CreateCourse, DeleteCourse};
