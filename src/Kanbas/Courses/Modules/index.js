import ModuleList from "./ModuleList";
function Modules() {
 return (
  <div>
   <p class="bread">Modules</p>
   <div class="row">
    <div class="pb-2">
     <button
      class="btn btn-sm btn-light float-end btn-outline-secondary mx-2 px-2"
      type="button"
     >
      <i
       class="fas fa-ellipsis-v px-1 float-end py-1"
       style={{ color: "grey" }}
      ></i>
     </button>
     <a href="#">
      <button class="btn btn-sm btn-danger float-end mx-2 px-2" type="button">
       <i class="fas fa-plus px-1"></i>Module
      </button>
     </a>

     <div class="dropdown">
      <button
       class="btn btn-sm float-end btn-light btn-outline-secondary mx-2 px-2 dropdown-toggle"
       type="button"
       data-bs-toggle="dropdown"
       aria-expanded="false"
      >
       <i
        class="fas fa-check-circle fa-inverse px-1"
        style={{ color: "green" }}
       ></i>
       Publish All
      </button>
      <ul class="dropdown-menu">
       <li>
        <a class="dropdown-item" href="#">
         Other
        </a>
       </li>
       <li>
        <a class="dropdown-item" href="#">
         Other 2
        </a>
       </li>
      </ul>
     </div>

     <button
      class="btn btn-sm btn-light float-end btn-outline-secondary mx-2 px-2"
      type="button"
     >
      View Progress
     </button>

     <button
      class="btn btn-sm btn-light float-end btn-outline-secondary mx-2 px-2"
      type="button"
     >
      Collapse All
     </button>
    </div>
    <hr />
   </div>
   <ModuleList />
  </div>
 );
}
export default Modules;
