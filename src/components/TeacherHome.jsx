import Backendless from "backendless";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function TeacherHome() {
  const navigate = useNavigate();
//   const [yogaFlow, setYogaFlow] = useState()  add when i will have Backend
  function logoutUser() {
    Backendless.UserService.logout()
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  }
  function createClass(){
    console.log();
    navigate("/createForm")

  }
  return (
    <div className="bg-base-200 min-h-screen flex flex-col">
      <div className="flex flex-center justify-between">
        <div>
          <h2>My Yoga Classes</h2>
        </div>
        {/* //first */}
        <details className="dropdown">
          <summary className="m-1 btn btn-sm border-zinc-300">Language</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a>English</a>
            </li>
            <li>
              <a>Українська</a>
            </li>
          </ul>
        </details>
        {/* second */}
        <button className="btn btn-sm m-1 border-zinc-300" onClick={logoutUser}>
          Logout
        </button>
        {/* three */}
        <button className="btn btn-sm m-1 border-zinc-300 text-l font-bold" onClick={createClass}>
          + Create Yoga Class
        </button>
        {/* ** */}
      </div>
      <div className="hero-content text-center overflow-hidden w-full flex flex-col p-4 bg-slate-300">
       <p>  Start to create your yoga class (+)</p>
       {}

      </div>
    </div>
  );
}

export default TeacherHome;
