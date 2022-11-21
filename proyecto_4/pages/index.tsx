import Courses from '@components/courses-component/courses.component';
import { NextPage } from 'next/types';
import { useUser } from '../auth/useUser';

const Home: NextPage = (props) => {
  const { user, logout } = useUser();
  return (
  <>
    <div className='text-indigo-500'>
      App Name
    </div>
    {
        user?.email &&
        <div>
          <div>Email: {user.email}</div>
          <button onClick={() => logout()}>Logout</button>
          <Courses />
        </div> 
      }
    {
        !user?.email &&
        <div>
          <div>Registrate</div>
          <a href='/login'>Use my google Account</a>
        </div> 
      }
      <a href='/courses' >Courses</a>
  </>)
};
//
export default Home;
