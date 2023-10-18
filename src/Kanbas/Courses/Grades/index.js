import db from "../../Database";
import { useParams } from "react-router-dom";
function Grades() {
 const { courseId } = useParams();
 const assignments = db.assignments.filter(
  (assignment) => assignment.course === courseId
 );
 const enrollments = db.enrollments.filter(
  (enrollment) => enrollment.course === courseId
 );
 return (
  <div>
   <p class="bread">Grades</p>
   <div class="row">
    <div class="pb-2">
     <button
      class="btn btn-sm btn-light float-end btn-outline-secondary m-2 px-2"
      type="button"
     >
      <i class="fas fa-cog float-end py-1" style={{ color: "grey" }}></i>
     </button>
     <a href="#">
      <button
       class="btn btn-sm btn-light btn-outline-secondary float-end m-2 "
       type="button"
      >
       <i class="fas fa-file-export fa-flip-horizontal px-2"></i>Export
      </button>
     </a>
     <a href="#">
      <button
       class="btn btn-sm btn-light btn-outline-secondary float-end m-2 "
       type="button"
      >
       <i class="fas fa-file-import px-2" style={{ color: "grey" }}></i>Import
      </button>
     </a>
    </div>
   </div>
   <div class="form-group row ">
    <div class="col-md-6 mb-3">
     <label class="col-sm-6 col-form-label pb-0 mx-3" for="text-fields-stu2">
      <b>Student Names</b>
     </label>
     <div class="input-group">
      <div class="input-group-prepend">
       <i class="fas fa-search p-2" style={{ color: "grey" }}></i>
      </div>
      <input
       class="form-control"
       type="text"
       id="text-fields-stu2"
       placeholder="Search Students"
      />
     </div>
    </div>
    <div class="col-md-6 mb-3">
     <label class="col-sm-6 col-form-label pb-0 mx-3" for="text-fields-sign2">
      <b>Assignment Names</b>
     </label>
     <div class="input-group">
      <div class="input-group-prepend">
       <i class="fas fa-search p-2" style={{ color: "grey" }}></i>
      </div>
      <input
       class="form-control"
       type="text"
       id="text-fields-sign2"
       placeholder="Search Assignments"
      />
     </div>
    </div>
   </div>
   <div class="form-group row pb-3 mx-3">
    <button
     type="submit"
     class=" btn btn-sm btn-outline-secondary btn-light col-md-2 px-1 "
    >
     <i class="fas fa-filter px-1" style={{ color: "grey" }}></i>Apply Filters
    </button>
   </div>

   <div className="table-responsive">
    <table className="table table-striped table-bordered">
     <thead>
      <th class="text-center">Student Name</th>
      {assignments.map((assignment) => (
       <th class="text-center">{assignment.title}</th>
      ))}
     </thead>
     <tbody>
      {enrollments.map((enrollment) => {
       const user = db.users.find((user) => user._id === enrollment.user);
       return (
        <tr>
         <td class="text-center">
          {user.firstName} {user.lastName}
         </td>
         {assignments.map((assignment) => {
          const grade = db.grades.find(
           (grade) =>
            grade.student === enrollment.user &&
            grade.assignment === assignment._id
          );
          return <td class="text-center">{grade?.grade || ""}</td>;
         })}
        </tr>
       );
      })}
     </tbody>
    </table>
   </div>
  </div>
 );
}
export default Grades;
