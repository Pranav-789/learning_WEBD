import React, { useState } from 'react'

import useCourseStore from '../app/courseStore'

const CourseForm = () => {

    const addCourse = useCourseStore((state)=> state.addCourse);

    const [courseTitle, setCourseTitle] = useState("");
    console.log("CourseForm Rendered")

    const handleCourseSubmit=()=>{
        if(!courseTitle) return alert("Please add a course title");
        addCourse({
            id: Math.ceil(Math.random()*100000),
            title: courseTitle
        })
        setCourseTitle("");
    }
  return (
    <div className='form-container'>
      <input value={courseTitle} className="form-input"
      onChange={(e)=>{
        setCourseTitle(e.target.value)
      }}
      />
      <button
      onClick={()=>{handleCourseSubmit()}}
      className='form-submit-btn'>Add Course</button>
    </div>
  )
}

export default CourseForm
