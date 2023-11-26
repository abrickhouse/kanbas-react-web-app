import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
import UseNav from "./usenav";
function Signup() {
 const [error, setError] = useState("");
 const [credentials, setCredentials] = useState({
  username: "",
  password: "",
  dob: "",
  email: "",
 });
 const navigate = useNavigate();
 const signup = async () => {
  try {
   await client.signup(credentials);
   navigate("/Kanbas/account");
  } catch (err) {
   setError(err.response.data.message);
  }
 };
 return (
  <div>
   <h1>Signup</h1>
   {error && <div>{error}</div>}
   <input
    value={credentials.username}
    className="form-control"
    onChange={(e) =>
     setCredentials({
      ...credentials,
      username: e.target.value,
     })
    }
   />
   <input
    value={credentials.password}
    className="form-control my-1"
    onChange={(e) =>
     setCredentials({
      ...credentials,
      password: e.target.value,
     })
    }
   />
   <button className="btn btn-primary" onClick={signup}>
    Signup
   </button>
   <UseNav />
  </div>
 );
}
export default Signup;
