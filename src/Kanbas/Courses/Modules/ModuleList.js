import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";

function ModuleList() {
 const { courseId } = useParams();
 const modules = db.modules;
 return (
  <div>
   {modules
    .filter((module) => module.course === courseId)
    .map((module, index) => (
     <ul className="list-group py-3">
      <li key={index} className="list-group-item bg-light">
       <h3>{module.name}</h3>
       <p>{module.description}</p>
      </li>
     </ul>
    ))}
  </div>
 );
}
export default ModuleList;
