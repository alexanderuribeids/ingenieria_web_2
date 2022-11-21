import withAuth from '../auth/withAuth';
import Courses from '@components/courses-component/courses.component';
const CoursesPage = (props) => {
  
    return (
      <div >
        <Courses />
      </div>
    );
  };
  
  //export default withAuth(CoursesPage);
  export default CoursesPage;