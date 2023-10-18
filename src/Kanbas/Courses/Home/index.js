import ModuleList from "../Modules/ModuleList";
import "./index.css";

function Home() {
 return (
  <div class="grid row">
   <p class="bread">Home</p>
   <div class="col-xl-9 col-lg-12 col-md-12 col-sm-10">
    <h2>Home</h2>
    <ModuleList />
   </div>
   <div class="col-3 d-none d-xl-block">
    <div>
     <p class="pb-0 mb-1">
      <strong>Course Status</strong>
     </p>
     <button
      class="btn-light btn-outline-secondary btn btn-sm  mx-1"
      type="button"
     >
      <i class="fas fa-ban fa-inverse " style={{ color: "grey" }}></i>
      Unpublish
     </button>
     <button class="btn-success btn btn-disabled btn-sm mx-1" type="button">
      <i class="fas fa-check-circle fa-inverse " style={{ color: "white" }}></i>
      Published
     </button>
     <ul class="list-group py-3">
      <li class="list-group-item list-group-item-secondary py-1 mb-1">
       <a class="text-black-assign" href="#">
        Import Existing Content
       </a>
      </li>
      <li class="list-group-item list-group-item-secondary py-1 mb-1">
       <a class="text-black-assign" href="#">
        Import From Commons
       </a>
      </li>
      <li class="list-group-item list-group-item-secondary py-1 mb-1">
       <a class="text-black-assign" href="#">
        Choose Home Page
       </a>
      </li>
      <li class="list-group-item list-group-item-secondary py-1 mb-1">
       <a class="text-black-assign" href="#">
        View Course Stream
       </a>
      </li>
      <li class="list-group-item list-group-item-secondary py-1 mb-1">
       <a class="text-black-assign" href="#">
        New Announcement
       </a>
      </li>
      <li class="list-group-item list-group-item-secondary py-1 mb-1">
       <a class="text-black-assign" href="#">
        New Analytics
       </a>
      </li>
      <li class="list-group-item list-group-item-secondary py-1 mb-1">
       <a class="text-black-assign" href="#">
        View Course Navigation
       </a>
      </li>
     </ul>
     <p class="pb-0 mb-0">
      <strong>To Do</strong>
     </p>
     <hr class="mt-1 mb-0"></hr>
     <ul class="list-group pb-3">
      <li class="list-group-item side pb-0">
       <a class="tab small" href="#">
        Grade A1 ENV{" "}
        <p class="tab text-muted pb-0 mb-0">100 points Sept 16 at 11:59pm</p>
       </a>
      </li>
     </ul>

     <div class="row pb-0 mb-0">
      <p class="pb-0 mb-0 col-md-6">
       <strong>Coming Up</strong>
      </p>
      <a class="tab float-end col-md-6 small pb-0 mb-0" href="#">
       View Calendar
      </a>
     </div>
     <hr class="mt-1 mb-0"></hr>

     <ul class="list-group">
      <li class="list-group-item side pb-0">
       <a class="tab small" href="#">
        Lecture{" "}
        <p class="tab text-muted pb-0 mb-0">
         CS4550.12631.202410 Sep 7 at 11:45am
        </p>
       </a>
      </li>
      <li class="list-group-item side pb-0">
       <a class="tab small" href="#">
        CS Lecture{" "}
        <p class="tab text-muted pb-0 mb-0">
         CS4550.12631.202410 Sep 11 at 11:45am
        </p>
       </a>
      </li>
      <li class="list-group-item side pb-0">
       <a class="tab small" href="#">
        CS Web Dev
        <p class="tab text-muted pb-0 mb-0">
         CS5610 06 SP23 Lecture Sep 11 at 6pm
        </p>
       </a>
      </li>
     </ul>
    </div>
   </div>
  </div>
 );
}
export default Home;
