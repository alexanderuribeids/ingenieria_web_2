import { useQuery, useMutation } from '@apollo/client';
import { getAllCourses, CreateCourse, DeleteCourse } from '@graphql/client/queries/course-queries';
import React, { useState } from 'react';
import Loading from '@components/Loading';
import { toast } from 'react-toastify';
import style from './courses.module.css';
import withAuth from '../../auth/withAuth';
import ConfirmModal from "@components/common/confirmation-modal";

const CreateCourseForm = () => {
  const [name, setName] = useState("")
  const [duration, setDuration] = useState("")
  const [link, setLink] = useState("")
  const [createCourse, { loading, error, data }] = useMutation(CreateCourse, {
    refetchQueries: [
      {
        query: getAllCourses,
      }
    ]
  })
  if (loading) return <Loading />;
  const saveCourse = async (e: any) => {
    e.preventDefault();
    const response = await createCourse({
      variables: {
        data: {
          name: name,
          duration: parseInt(duration),
          link: link,
        }
      },
    });
    console.log(data)
    toast("Curso creado con id: " + data.createCourse.id)
  }
  
  return (
    <div>
      <h1><a href=''>Create Course</a></h1>
      <div className='flex gap-3'>
        <form onSubmit={saveCourse}>
          <input
            className={style.inputText}
            autoFocus
            onChange={(e) => setName(e.target.value)}
            placeholder="Course Name"
            type="text"
            value={name}
          />
          <input
            className={style.inputText}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="Course duration"
            type="number"
            value={duration}
          />
          <input
            className={style.inputText}
            onChange={(e) => setLink(e.target.value)}
            placeholder="Course Link"
            value={link}
          />
          <input
            className={style.submitButton}
            disabled={!name || !duration || !link}
            type="submit"
            value="Create"
          />
        </form>
      </div>
    </div>
  )
}

const CourseList = () => {
  const { data, loading } = useQuery(getAllCourses);
  const [deleteCourse] = useMutation(DeleteCourse, {
    refetchQueries: [
      {
        query: getAllCourses,
      }
    ]
  })
  const handleDelete = async (e: any) => {    
    const response = await deleteCourse({
      variables: {
        id:  e.currentTarget.id
      },
    });
    console.log(response.data)
    toast("Curso borrado: " + response.data.deleteCourse.name)
  }
  if (loading) return <Loading />;
  return (
    <div>
      <h1>Courses List</h1>
      <div className='flex gap-3'>
        {data.getCourses.map((el: any) => (
          <div
            className='bg-gray-200 p-4 flex flex-col rounded-lg shadow-lg'
            key={el.id}
          >
            <span>{el.id}</span>
            <span>{el.name}</span>
            <span>{el.duration}</span>
            <span>{el.link}</span>
            <ConfirmModal
              title="Confirm"
              description="Are you sure?"
              callback={handleDelete}
            >
            {confirm => (
              <p>
                <button className={style.deleteButton} type="button" onClick={confirm(handleDelete)} id={el.id}>
                  Delete
                </button>
              </p>
            )}
          </ConfirmModal>
          </div>
        ))}
      </div>
    </div>
  )
}

const Courses = () => {
  
  return (
    <div className='p-10'>
      <CreateCourseForm />
      <CourseList />
    </div>
  );
};

//export default withAuth(Courses);
export default Courses;
