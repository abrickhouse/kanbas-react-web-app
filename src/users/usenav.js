import { Link } from "react-router-dom";
function UseNav() {
 return (
  <div>
   <ul class="list-group w-25">
    <Link to="/Kanbas/Dashboard" className="w-75">
     <li class="list-group-item">Home</li>
    </Link>

    <li class="list-group-item w-75">Search</li>

    <Link to="/Kanbas/signin" className="w-75">
     <li class="list-group-item">signin</li>
    </Link>
    <Link to="/Kanbas/signup" className="w-75">
     <li class="list-group-item">signup</li>
    </Link>
    <Link to="/Kanbas/account" className="w-75">
     <li class="list-group-item">account</li>
    </Link>
   </ul>
  </div>
 );
}
export default UseNav;
