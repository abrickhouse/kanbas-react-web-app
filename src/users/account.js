import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function Account() {
 const { id } = useParams();
 const [account, setAccount] = useState(null);
 const findUserById = async (id) => {
  const user = await client.findUserById(id);
  setAccount(user);
 };

 const navigate = useNavigate();
 const fetchAccount = async () => {
  const account = await client.account();
  setAccount(account);
 };
 const save = async () => {
  await client.updateUser(account);
 };
 const signout = async () => {
  await client.signout();
  navigate("/Kanbas/signin");
 };

 useEffect(() => {
  if (id) {
   findUserById(id);
  } else {
   fetchAccount();
  }
 }, []);
 return (
  <div className="w-50">
   <h1>Account</h1>
   {account && (
    <div>
     <input
      value={account.password}
      className="form-control"
      onChange={(e) => setAccount({ ...account, password: e.target.value })}
     />
     <input
      value={account.firstName}
      className="form-control"
      onChange={(e) => setAccount({ ...account, firstName: e.target.value })}
     />
     <input
      value={account.lastName}
      className="form-control"
      onChange={(e) => setAccount({ ...account, lastName: e.target.value })}
     />
     <input
      value={account.dob}
      className="form-control"
      onChange={(e) => setAccount({ ...account, dob: e.target.value })}
     />
     <input
      value={account.email}
      className="form-control"
      onChange={(e) => setAccount({ ...account, email: e.target.value })}
     />
     <select
      className="form-control"
      onChange={(e) => setAccount({ ...account, role: e.target.value })}
     >
      <option value="USER">User</option>
      <option value="ADMIN">Admin</option>
      <option value="FACULTY">Faculty</option>
      <option value="STUDENT">Student</option>
     </select>
     <button className="btn btn-primary" onClick={save}>
      Save
     </button>
     <button className="btn btn-secondary" onClick={signout}>
      Signout
     </button>
     <Link to="/Kanbas/account/users" className="btn btn-warning w-100">
      Users
     </Link>
    </div>
   )}
  </div>
 );
}
export default Account;
