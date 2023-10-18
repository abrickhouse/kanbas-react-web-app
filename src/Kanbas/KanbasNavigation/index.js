import { Link, useLocation } from "react-router-dom";
import "./index.css";
import "../../vendors/fontawesome-free-5.15.4-web/css/all.css";
function KanbasNavigation() {
 const links = [
  "Account",
  "Dashboard",
  "Courses",
  "Calendar",
  "Inbox",
  "History",
  "Studio",
  "Commons",
  "Help",
 ];
 const imgs = [
  <i class="fas col-12 fa-user-circle fa-2x" style={{ color: "white" }}></i>,
  <i
   class="fas col-12 fa-tachometer-alt fa-2x"
   style={{ color: "#cf0505" }}
  ></i>,
  <i class="fas col-12 fa-book fa-2x" style={{ color: "#cf0505" }}></i>,
  <i class="fas col-12 fa-calendar fa-2x" style={{ color: "#cf0505" }}></i>,
  <i class="fas col-12 fa-inbox fa-2x" style={{ color: "#cf0505" }}></i>,
  <i class="fas col-12 fa-clock fa-2x " style={{ color: "#cf0505" }}></i>,
  <i class="fas col-12 fa-sticky-note fa-2x" style={{ color: "#cf0505" }}></i>,
  <i
   class="fas col-12 fa-external-link-alt fa-2x"
   style={{ color: "#cf0505" }}
  ></i>,
  <i
   class="fas col-12 fa-question-circle fa-2x"
   style={{ color: "#cf0505" }}
  ></i>,
 ];
 const { pathname } = useLocation();
 return (
  <div
   className="list-group wd-bg-color-black text-white wd-grid-col-left-sidebar-1"
   style={{ width: 100 }}
  >
   {links.map((link, index) => (
    <Link
     key={index}
     to={`/Kanbas/${link}`}
     style={{ height: 70 }}
     className={`list-item nav-links text-center py-2  ${
      pathname.includes(link) && "active bg-white text-red"
     }`}
    >
     {imgs[index]}
     {link}
    </Link>
   ))}
  </div>
 );
}
export default KanbasNavigation;
