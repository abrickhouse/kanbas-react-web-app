import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import db from "./Database";
import { useState, useEffect } from "react";
import * as service from "./service";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";

function Kanbas() {
 const [courses, setCourses] = useState([]);
 const [course, setCourse] = useState({
  name: "New Course",
  number: "New Number",
  startDate: "2023-09-10",
  endDate: "2023-12-15",
 });
 const API_BASE = process.env.REACT_APP_API_BASE;
 const URL = `${API_BASE}/courses`;

 const findAllCourses = async () => {
  const response = await axios.get(URL);
  setCourses(response.data);
 };
 useEffect(() => {
  findAllCourses();
 }, []);
 //BAD REQUEST
 const addCourse = async (course) => {
  console.log(course);
  try {
   const newCourse = await axios.post(URL, course);
   setCourses([newCourse, ...courses]);
   setCourse({ name: "" });
  } catch (error) {
   console.log(error);
  }
 };
 // BAD REQUEST
 const deleteCourse = async (course) => {
  try {
   await axios.delete(`${URL}/${course._id}`);
   setCourses(courses.filter((c) => c._id !== course._id));
  } catch (error) {
   console.log(error);
  }
 };

 // CIRCULAR STRUCTURE
 const updateCourse = async (course) => {
  try {
   await axios.put(`${URL}/${course._id}`, course);
   setCourses(
    courses.map((c) => {
     if (c._id === course._id) {
      return course;
     }
     return c;
    })
   );
   setCourse({ name: "" });
  } catch (error) {
   console.log(error);
  }
 };

 return (
  <Provider store={store}>
   <div className="wd-flex-row-container grid row">
    <KanbasNavigation />
    <div className="col-xl-11 col-lg-10 col-md-10 col-sm-10 col-xs-4">
     <Routes>
      <Route path="/" element={<Navigate to="Dashboard" />} />
      <Route path="Account" element={<h1>Account</h1>} />
      <Route
       path="Dashboard"
       element={
        <Dashboard
         courses={courses}
         course={course}
         setCourse={setCourse}
         addNewCourse={addCourse}
         deleteCourse={deleteCourse}
         updateCourse={updateCourse}
        />
       }
      />
      <Route
       path="Courses/:courseId/*"
       element={<Courses courses={courses} />}
      />
     </Routes>
    </div>
   </div>
  </Provider>
 );
}
export default Kanbas;
