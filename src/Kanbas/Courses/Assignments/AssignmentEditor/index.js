import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import "./edit.css";
import { useSelector, useDispatch } from "react-redux";
import {
 addAssignment,
 deleteAssignment,
 selectAssignment,
 updateAssignment,
} from "../assignmentsReducer";

function AssignmentEditor() {
 const { assignmentId } = useParams();
 const assignments = useSelector(
  (state) => state.assignmentsReducer.assignments
 );
 const assignment = useSelector((state) => state.assignmentsReducer.assignment);
 const dispatch = useDispatch();

 const { courseId } = useParams();
 const navigate = useNavigate();
 const handleSave = () => {
  dispatch(updateAssignment(assignment));
  navigate(`/Kanbas/Courses/${courseId}/Assignments`);
 };
 return (
  <div>
   <p class="bread">Assignments </p>
   <p class="bread" style={{ left: 490 }}>
    {" "}
    {">"}
   </p>
   <p class="bread" style={{ left: 520 }}>
    {assignmentId}
   </p>
   <h2>Assignment Name</h2>
   <input
    value={assignment.title}
    onChange={(e) =>
     dispatch(selectAssignment({ ...assignment, title: e.target.value }))
    }
    className="form-control mb-2"
   />

   <div class="form-group row pb-3 mx-1">
    <textarea
     class="form-control"
     onChange={(e) =>
      dispatch(selectAssignment({ ...assignment, description: e.target.value }))
     }
    >
     {assignment.description}
    </textarea>
   </div>
   <div class="form-group row pb-3">
    <div class="col-sm-3">
     <label class="col-form-label  float-md-end " for="text-field-pt">
      Points
     </label>
    </div>
    <div class="col-sm-9">
     <input
      type="number"
      class="form-control"
      id="text-field-pt"
      placeholder="0"
      value="100"
     />
    </div>
   </div>
   <div class="form-group row pb-3">
    <div class="col-sm-3">
     <label class="col-form-label  float-md-end " for="select-sign">
      {" "}
      Assignment Group
     </label>
    </div>
    <div class="col-sm-9">
     <select class="form-control" id="select-sign">
      <option>ASSIGNMENTS</option>
      <option>ASSIGNMENTS 2</option>
      <option>ASSIGNMENTS 3</option>
      <option>ASSIGNMENTS 4</option>
     </select>
    </div>
   </div>
   <div class="form-group row pb-3">
    <div class="col-sm-3">
     <label class="col-form-label  float-md-end " for="select-per">
      {" "}
      Display Grade as
     </label>
    </div>
    <div class="col-sm-9">
     <select class="form-control" id="select-per">
      <option value="PERCENTAGE">Percentage</option>
      <option value="PERCENTAGE2">Percentage 2</option>
      <option value="PERCENTAGE3">Percentage 3</option>
      <option value="PERCENTAGE4">Percentage 4</option>
     </select>
    </div>
   </div>
   <div form-group row pb-3>
    <div class="offset-sm-3 col-sm-9 pb-3">
     <div class="form-check">
      <input
       class="form-check-input"
       type="checkbox"
       value=""
       id="defaultCheck1"
      ></input>
      <label class="form-check-label" for="defaultCheck1">
       Do not count this assignment otwards the final grade
      </label>
     </div>
    </div>
   </div>
   <div class="form-group row pb-3">
    <div class="col-sm-3">
     <label class="col-form-label  float-md-end " for="select-one">
      Submission Type
     </label>
    </div>
    <div class=" col-sm-9 ">
     <div class="form-check">
      <div class="row ">
       <select class="form-control mb-3 col-sm-5" id="select-one">
        <option value="ONLINE">Online</option>
       </select>
      </div>
      <div class="form-check pb-2">
       <input type="checkbox" value="TXT" name="check-entry" id="chkbox-txt" />
       <label for="chkbox-txt" class="px-2 ">
        Text Entry
       </label>
      </div>
      <div class="form-check pb-2">
       <input type="checkbox" value="URL" name="check-entry" id="chkbox-url" />
       <label for="chkbox-url" class="px-2 ">
        Website URL
       </label>
      </div>
      <div class="form-check pb-2">
       <input
        type="checkbox"
        value="MEDIA"
        name="check-entry"
        id="chkbox-media"
       />
       <label for="chkbox-media" class="px-2 ">
        Media Recordings
       </label>
      </div>
      <div class="form-check pb-2">
       <input
        type="checkbox"
        value="ANNO"
        name="check-entry"
        id="chkbox-anno"
       />
       <label for="chkbox-anno" class="px-2 ">
        Student Annotation
       </label>{" "}
      </div>
      <div class="form-check pb-2">
       {" "}
       <input
        type="checkbox"
        value="FILE"
        name="check-entry"
        id="chkbox-file"
       />
       <label for="chkbox-file" class="px-2 ">
        File Uploads
       </label>{" "}
      </div>
     </div>
    </div>
   </div>
   <div class="form-group row pb-2">
    <div class="col-sm-3">
     <label class="col-form-label  float-md-end " for="select-one-sub">
      Submission Attempts
     </label>
    </div>
    <div class="col-sm-9">
     <select class="form-control" id="select-one-sub">
      <option value="UNLIMITED">Unlimited</option>
     </select>
    </div>
   </div>

   <div class="form-group row pb-3">
    <div class="col-sm-3">
     <label class="col-form-label  float-md-end " for="select-one-plag">
      Plagiarism Review
     </label>
    </div>
    <div class="col-sm-9">
     <select class="form-control" id="select-one-plag">
      <option value="NONE">None</option>
     </select>
    </div>
   </div>

   <div class="form-group row pb-2">
    <div class="col-sm-3">
     <label class="col-form-label  float-md-end pt-0" for="chkbox-grp">
      Group Assignment
     </label>
    </div>
    <div class="col-sm-9">
     <div class="form-check">
      <input
       class="form-check-input"
       type="checkbox"
       value="GROUP"
       name="check-entry"
       id="chkbox-grp"
      />
      <label class="form-check-label" for="chkbox-grp">
       This is a group assignment
      </label>
     </div>
    </div>
   </div>
   <div class="form-group row">
    <div class="col-sm-3">
     <label class="col-form-label  float-md-end pt-0" for="chkbox-peer">
      Peer Reviews
     </label>
    </div>
    <div class="col-sm-9">
     <div class="form-check">
      <input
       class="form-check-input"
       type="checkbox"
       value="PEER"
       name="check-entry"
       id="chkbox-peer"
      />
      <label class="form-check-label" for="chkbox-peer">
       Require Peer Reviews
      </label>{" "}
      <br />
     </div>
    </div>
   </div>

   <div class="form-group row pb-3">
    <div class="col-sm-3 float-md-end">
     <label
      class="col-sm-3 col-form-label float-md-end"
      for="text-fields-search"
     >
      Assign
     </label>
    </div>
    <div class="col-sm-9">
     <div class="col-md-12 pb-1">
      <label class="col-sm-3 col-form-label pb-0" for="text-fields-search">
       Assign to
      </label>
      <input
       class="form-control"
       type="text"
       id="text-fields-search"
       placeholder="Everyone"
       value="Everyone"
      />
     </div>
     <div class="form-group row">
      <div class="col-md-12 pb-1">
       <label class="col-sm-3 col-form-label pb-0" for="text-fields-due">
        Due
       </label>
       <input
        class="form-control"
        type="date"
        id="text-fields-due"
        value={assignment.dueDate}
        onChange={(e) =>
         dispatch(selectAssignment({ ...assignment, dueDate: e.target.value }))
        }
       />
      </div>
     </div>

     <div class="form-group row pb-3">
      <div class="col-md-6 mb-3">
       <label class="col-sm-6 col-form-label pb-0" for="text-fields-from">
        Available from
       </label>
       <input
        class="form-control"
        type="date"
        id="text-fields-from"
        value={assignment.availableFromDate}
        onChange={(e) =>
         dispatch(
          selectAssignment({ ...assignment, availableFromDate: e.target.value })
         )
        }
       />
      </div>
      <div class="col-md-6 mb-3">
       <label class="col-sm-6 col-form-label pb-0" for="text-fields-until">
        Until
       </label>
       <input
        class="form-control"
        type="date"
        id="text-fields-until"
        value={assignment.availableUntilDate}
        onChange={(e) =>
         dispatch(
          selectAssignment({
           ...assignment,
           availableUntilDate: e.target.value,
          })
         )
        }
       />
      </div>
     </div>
    </div>
   </div>
   <div class="form-group py-3">
    <hr></hr>
    <div class="form-check float-start">
     <input
      class="form-check-input"
      type="checkbox"
      value="NOTIFY"
      name="check-entry"
      id="chkbox-notif"
     />
     <label class="form-check-label" for="chkbox-notif">
      Notify users that this content has changed
     </label>{" "}
     <br />
    </div>
    <button
     class="btn btn-danger float-end"
     type="button"
     onClick={() => handleSave()}
    >
     Save
    </button>
    <button
     class="btn btn-light float-end btn-outline-secondary mx-2"
     type="button"
    >
     <Link
      to={`/Kanbas/Courses/${courseId}/Assignments`}
      className="text-black-assign"
     >
      Cancel
     </Link>
    </button>
   </div>
  </div>
 );
}

export default AssignmentEditor;
