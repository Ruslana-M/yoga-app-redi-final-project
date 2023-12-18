import Backendless from "backendless";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function TeacherHome({ user, setFlowForPreview }) {
  const navigate = useNavigate();
  const [yogaFlows, setYogaFlows] = useState([]);

  function createClass() {
    navigate("/createForm");
  }
  // to find yoga classes by user id
  useEffect(() => {
    if (!user) {
      return;
    }
    //  one user should see just his classes
    // query builder creates a filter for Backendless.Data find
    Backendless.Data.of("tamplate")
      .find()
      .then((res) => {
        console.log(res);
        setYogaFlows(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);
  function goToPreview(flow) {
    setFlowForPreview(flow);
    navigate("/preview");
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
        <div className="w-full flex flex-wrap gap-5 justify-center p-4 ">
          {yogaFlows.map((i, index) => (
            <div
              className="card card-compact w-36 bg-base-100 shadow-xl "
              key={index}
            >
               {/* <figure>
                <img src={i.url} alt="image of yoga flow" />
               </figure>  */}
              <div className="card-body">
                <p className="card-title"> <b> {i.title} </b> </p>
                <p className="h-14 text-ellipsis overflow-hidden ">{i.description}</p>
                <p>{i.difficulty}</p>
                <div className="card-actions justify-end">
                  <button onClick={() => goToPreview(i)} className="btn btn-sm">
                    See more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeacherHome;
