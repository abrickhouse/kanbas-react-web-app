import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UseNav from "./usenav";
function Signin() {
 const [credentials, setCredentials] = useState({ username: "", password: "" });
 const navigate = useNavigate();
 const signin = async () => {
  await client.signin(credentials);
  navigate("/Kanbas/account");
 };
 return (
  <div>
   <h1>Signin</h1>

   <input
    value={credentials.username}
    className="form-control"
    onChange={(e) =>
     setCredentials({ ...credentials, username: e.target.value })
    }
   />
   <input
    value={credentials.password}
    className="form-control my-1"
    onChange={(e) =>
     setCredentials({ ...credentials, password: e.target.value })
    }
   />
   <button className="btn btn-primary" onClick={signin}>
    {" "}
    Sign In{" "}
   </button>
   <UseNav />
  </div>
 );
}
export default Signin;
