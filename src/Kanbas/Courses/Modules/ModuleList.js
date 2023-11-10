import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import {
 addModule,
 deleteModule,
 updateModule,
 setModule,
 setModules,
} from "./modulesReducer";
import * as client from "./client";

function ModuleList() {
 const { courseId } = useParams();
 useEffect(() => {
  client
   .findModulesForCourse(courseId)
   .then((modules) => dispatch(setModules(modules)));
 }, [courseId]);

 const modules = useSelector((state) => state.modulesReducer.modules);
 const module = useSelector((state) => state.modulesReducer.module);
 const dispatch = useDispatch();
 const handleAddModule = () => {
  client.createModule(courseId, module).then((module) => {
   dispatch(addModule(module));
  });
 };
 const handleDeleteModule = (moduleId) => {
  client.deleteModule(moduleId).then((status) => {
   dispatch(deleteModule(moduleId));
  });
 };
 const handleUpdateModule = async () => {
  const status = await client.updateModule(module);
  dispatch(updateModule(module));
 };

 return (
  <div>
   <div className="grid row col-12">
    <li className="list-group-item col-10">
     <input
      className="form-control col-6 mb-2"
      value={module.name}
      onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
     />
     <textarea
      className="form-control col-6"
      value={module.description}
      onChange={(e) =>
       dispatch(setModule({ ...module, description: e.target.value }))
      }
     />
    </li>
    <li className="list-group-item col-2 float-end">
     <div>
      <button
       className="btn float-end btn-outline-secondary mx-1 mb-2 "
       onClick={handleAddModule}
      >
       Add
      </button>
      <button
       className="btn float-end btn-outline-secondary"
       onClick={() => handleUpdateModule()}
      >
       Update
      </button>
     </div>
    </li>
   </div>
   {modules
    .filter((module) => module.course === courseId)
    .map((module, index) => (
     <ul className="list-group py-3 ">
      <li key={index} className="list-group-item bg-light ">
       <div className="grid row col-12">
        <div className="col-11">
         <h3>{module.name}</h3>
         <p>{module.description}</p>
        </div>
        <div className="col-1">
         <button
          className="btn btn-sm float-end btn-outline-secondary"
          onClick={() => dispatch(setModule(module))}
         >
          Edit
         </button>
         <button
          className="btn btn-sm float-end btn-danger my-2"
          onClick={() => handleDeleteModule(module._id)}
         >
          Delete
         </button>
        </div>
       </div>
      </li>
     </ul>
    ))}
  </div>
 );
}
export default ModuleList;
