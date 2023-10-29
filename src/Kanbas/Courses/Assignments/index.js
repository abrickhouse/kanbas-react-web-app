import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import {
 addAssignment,
 deleteAssignment,
 selectAssignment,
 updateAssignment,
} from "./assignmentsReducer";

function Assignments() {
 const { courseId } = useParams();
 const assignments = useSelector(
  (state) => state.assignmentsReducer.assignments
 );
 const assignment = useSelector((state) => state.assignmentsReducer.module);
 const dispatch = useDispatch();
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

     <Link
      key={new Date().getTime().toString()}
      to={`/Kanbas/Courses/${courseId}/Assignments/${new Date()
       .getTime()
       .toString()}`}
      onClick={() =>
       dispatch(addAssignment({ ...assignment, course: courseId }))
      }
     >
      <button class="btn btn-sm btn-danger float-end m-2 px-2" type="button">
       <i class="fas fa-plus px-1"></i>Assignment
      </button>
     </Link>
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
     <div className="grid row col-12">
      <Link
       key={assignment._id}
       to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
       onClick={() =>
        dispatch(selectAssignment({ ...assignment, course: courseId }))
       }
       className="col-11"
      >
       <li class="list-group-item green-side">
        <div className="col-11">
         <b>{assignment.title}</b>
         <p>
          Week {assignment._id} {assignment.description}(
          {assignment.availableFromDate}) Module |<br></br>
          <b>Due</b> {assignment.dueDate} at 11:59pm | 100 pts
         </p>
        </div>
       </li>
      </Link>
      <div className="col-1">
       <button
        className="btn btn-sm float-end btn-danger my-4"
        onClick={() => dispatch(deleteAssignment(assignment._id))}
       >
        Delete
       </button>
      </div>
     </div>
    ))}
   </ul>
  </div>
 );
}
export default Assignments;
