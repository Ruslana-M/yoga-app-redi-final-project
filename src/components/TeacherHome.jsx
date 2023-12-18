import React from "react";
import { useNavigate } from "react-router-dom";

function TeacherHome() {
  const navigate = useNavigate();
  // const [yogaFlows, setYogaFlows] = useState([]); // add when i will have Backend

  function createClass() {
    navigate("/createForm");
  }
  return (
    <div className="bg-base-200 min-h-screen flex flex-col">
      <div className="flex flex-center justify-between">
        <div className="">
          <p className="font-bold pl-3 pt-2">My Yoga Classes: </p>
        </div>

        {/* three */}
        <button
          className="btn btn-sm m-1 border-zinc-300 border-2 text-l font-bold"
          onClick={createClass}
        >
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
