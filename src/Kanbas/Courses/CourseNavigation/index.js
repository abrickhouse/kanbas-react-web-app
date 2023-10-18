import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";
function CourseNavigation() {
 const links = [
  "Home",
  "Modules",
  "Piazza",
  "Zoom Meetings",
  "Assignments",
  "Quizzes",
  "Grades",
  "People",
 ];
 const { courseId } = useParams();
 const { pathname } = useLocation();
 return (
  <div className="mx-2 side-nav text-white" style={{ width: 150 }}>
   {links.map((link, index) => (
    <Link
     key={index}
     to={`/Kanbas/Courses/${courseId}/${link}`}
     className={`list-group-item py-1 tab ${
      pathname.includes(link) && " text-black"
     }`}
    >
     {link}
    </Link>
   ))}
  </div>
 );
}

export default CourseNavigation;
