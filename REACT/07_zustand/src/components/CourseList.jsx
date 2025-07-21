import React from 'react'
import useCourseStore from '../app/courseStore'

const CourseList = () => {
    // const {courses, removeCourse, toggleCourseStatus} = useCourseStore(
    //     (state)=> ({
    //         courses: state.courses,
    //         removeCourse: state.removeCourse,
    //         toggleCourseStatus: state.toggleCourseStatus
    //     }),
    // )
    const courses = useCourseStore((state) => state.courses);
    const removeCourse = useCourseStore((state) => state.removeCourse);
    const toggleCourseStatus = useCourseStore(
      (state) => state.toggleCourseStatus
    );
  return (
    <div>
      <ul>
        {courses.map((course, id) => (
          <li
            key={course.id}
            className={`course-item`}
            style={{ backgroundColor: course.completed ? "#00FF44" : "white" }}
          >
            <span className="course-item-col-1">
              <input
                type="checkbox"
                checked={course.completed}
                onChange={(e) => {
                  toggleCourseStatus(course.id);
                }}
              />
            </span>
            <span style={{ color: "black" }}>{course?.title}</span>
            <button
              className="delete btn"
              onClick={() => {
                removeCourse(course.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList
