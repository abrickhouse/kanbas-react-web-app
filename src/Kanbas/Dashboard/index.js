import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./dash.css";
import db from "../Database";
import img from "../../images/mastpic.jpg";
function Dashboard({
 courses,
 course,
 setCourse,
 addNewCourse,
 deleteCourse,
 updateCourse,
}) {
 return (
  <div>
   <h1 class="m-3">
    Dashboard
    <hr />
   </h1>
   <h5>Course</h5>
   <input
    value={course.name}
    className="form-control mb-2"
    onChange={(e) => setCourse({ ...course, name: e.target.value })}
   />
   <input
    value={course.number}
    className="form-control mb-2"
    onChange={(e) => setCourse({ ...course, number: e.target.value })}
   />
   <input
    value={course.startDate}
    className="form-control mb-2"
    type="date"
    onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
   />
   <input
    value={course.endDate}
    className="form-control mb-2"
    type="date"
    onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
   />
   <button
    class="btn float-end btn-outline-secondary "
    onClick={() => updateCourse(course)}
   >
    Update
   </button>

   <button
    class="btn float-end btn-outline-secondary mx-3"
    onClick={() => addNewCourse(course)}
   >
    Add
   </button>

   <h2 class="text-muted m-3">Published Courses ({courses.length})</h2>
   <div className="d-flex flex-wrap flex-row">
    {courses.map((course) => (
     <Link
      key={course._id}
      to={`/Kanbas/Courses/${course._id}`}
      className="list-group-item"
     >
      <div class="card space" style={{ width: 270 }}>
       <img class="card-img-top" src={img} alt=""></img>
       <div class="card-body">
        <h5 class="card-title">{course.name}</h5>
        <p class="card-text m-0 p-0">
         {course.number}{" "}
         <p class="card-text text-muted m-0 p-0 text-2">
          {course.startDate} to {course.endDate}
         </p>
        </p>
        <a href="home.html">
         <i
          class="fas col-12 fa-book fa-2 p-1"
          style={{ color: "#818181" }}
         ></i>
         <button
          class="btn btn-danger float-end px-2 mx-1"
          onClick={(event) => {
           event.preventDefault();
           deleteCourse(course);
          }}
         >
          Delete
         </button>
         <button
          class="btn btn-secondary float-end px-2 mx-1"
          onClick={(event) => {
           event.preventDefault();
           setCourse(course);
          }}
         >
          Edit
         </button>
        </a>
       </div>
      </div>
     </Link>
    ))}
   </div>
  </div>
 );
}
export default Dashboard;
