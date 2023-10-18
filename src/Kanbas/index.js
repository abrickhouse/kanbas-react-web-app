import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";

function Kanbas() {
 return (
  <div className="wd-flex-row-container grid row">
   <KanbasNavigation />
   <div className="col-xl-11 col-lg-10 col-md-10 col-sm-10 col-xs-4">
    <Routes>
     <Route path="/" element={<Navigate to="Dashboard" />} />
     <Route path="Account" element={<h1>Account</h1>} />
     <Route path="Dashboard" element={<Dashboard />} />
     <Route path="Courses/:courseId/*" element={<Courses />} />
    </Routes>
   </div>
  </div>
 );
}
export default Kanbas;
