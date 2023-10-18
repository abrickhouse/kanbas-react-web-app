import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";

function Assignments() {
 const { courseId } = useParams();
 const assignments = db.assignments;
 const courseAssignments = assignments.filter(
  (assignment) => assignment.course === courseId
 );
 return (
  <div>
   <div class="row">
    <div class="pb-2 wd-zindex-bring-to-front">
     <input
      type="text"
      id="text-field-search"
      class="form-control-m block float-start my-2 wd-zindex-bring-to-front"
      placeholder="Search for Assignment"
     />
     <button
      class="btn btn-sm btn-light float-end btn-outline-secondary m-2 px-2"
      type="button"
     >
      <i
       class="fas fa-ellipsis-v px-1 float-end py-1"
       style={{ color: "grey" }}
      ></i>
     </button>

     <a href="#">
      <button class="btn btn-sm btn-danger float-end m-2 px-2" type="button">
       <i class="fas fa-plus px-1"></i>Assignment
      </button>
     </a>
     <a href="#">
      <button
       class="btn btn-sm btn-light btn-outline-secondary float-end m-2 px-2"
       type="button"
      >
       <i class="fas fa-plus px-1" style={{ color: "grey" }}></i>Group
      </button>
     </a>
    </div>
    <hr></hr>
   </div>
   <p class="bread">Assignments</p>
   <ul class="list-group ">
    <li class="list-group-item list-group-item-secondary grid ">
     <div class="px-2 py-1 float-start">
      <b>Assignments</b>
     </div>

     <span class="btn pill btn-sm btn-light btn-outline-secondary float-end py-1 text-dark">
      40% of Total
     </span>
    </li>

    {courseAssignments.map((assignment) => (
     <Link
      key={assignment._id}
      to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
      className=""
     >
      <li class="list-group-item green-side">
       <b>{assignment.title}</b>
       <p>
        Week {assignment._id} - SETUP - Week starting on Monday September 5th
        (9/5/2022) Module |<br></br>
        <b>Due</b> Sep 18, 2022 at 11:59pm | 100 pts
       </p>
      </li>
     </Link>
    ))}
   </ul>
  </div>
 );
}
export default Assignments;
