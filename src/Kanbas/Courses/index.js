import { Link, useLocation } from "react-router-dom";
import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import "./index.css";
import "../../vendors/fontawesome-free-5.15.4-web/css/all.css";

function Courses({ courses }) {
 const { courseId } = useParams();
 const { path } = useLocation();
 console.log(courseId);
 const course = courses.find((course) => course._id === courseId);
 return (
  <div className="wd-flex-row-container col-12">
   <nav class="breadcrumb" aria-label="breadcrumb">
    <ol class="breadcrumb mb-0 pb-0">
     <li class="breadcrumb-item pb-0">
      <Link to={`/Kanbas/Dashboard`} className="tab-2 mx-3 mt-2">
       {course.number} {course.name}
      </Link>
     </li>
     <li class="breadcrumb-item active pb-0" aria-current="page">
      {path}
     </li>
    </ol>
   </nav>
   <hr class="mx-3" />
   <div class="row flex">
    <CourseNavigation />
    <div className="col-xl-10 col-lg-9 col-md-9">
     <div>
      <Routes>
       <Route path="/" element={<Navigate to="Home" />} />
       <Route path="Home" element={<Home />} />
       <Route path="Modules" element={<Modules />} />
       <Route path="Assignments" element={<Assignments />} />
       <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
       <Route path="Grades" element={<Grades />} />
      </Routes>
     </div>
    </div>
   </div>
  </div>
 );
}

export default Courses;
