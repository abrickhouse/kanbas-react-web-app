import { Link } from "react-router-dom";

function Nav() {
 return (
  <nav className="nav nav-tabs mb-2">
   <Link className="nav-link black-" to="/Labs/a3">
    A3
   </Link>
   <Link className="nav-link black-" to="/Labs/a4">
    A4
   </Link>
   <Link className="nav-link black-" to="/hello">
    Hello
   </Link>
   <Link className="nav-link black-" to="/Kanbas">
    Kanbas
   </Link>
  </nav>
 );
}

export default Nav;
