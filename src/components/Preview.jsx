import { useEffect } from "react";
import dataJson from "../data/data-asana.json";
import { useNavigate } from "react-router-dom";
import mp3 from '../audio.mp3'

//  recieve props
// set const for array of selected asanas from database
//  filtered out through objects the selected asanas ids 

function Preview({ flowForPreview, setFlowForPreview }) {
  const navigate = useNavigate();
  // if (!flowForPreview) {
  //   return navigate("/teacherHome");
  // }

  function navigateToCreateForm() {
    navigate("/createForm");
  }
  function navigateToTeacherHome() {
    setFlowForPreview(null);
    navigate("/teacherHome");
  }

  // array of selected asanas ids  [4, 1, 3] in our data table
  const warmUpsIds = flowForPreview.warmUps;
  const asanaIds = flowForPreview.asanas;

  // for each id, find the object in datajson.asanas (map-to see the items in selected order)
  const selectedWarmups = warmUpsIds.map((id) => {
    const obj = dataJson.asanas.find((a) => a.id === id)  //return me obj who has the id of warmupsid
    return obj
  })
  
  const selectedAsanas = asanaIds.map((id) => {
    const obj = dataJson.asanas.find((a) => a.id === id)
    return obj
  })

  return (
    <div>
      <div className="flex flex-center justify-between">
        {/* 1 btn */}
        <button
          className=" flex justify-between btn btn-sm border-zinc-400 text-l ml-3 font-bold mt-3"
          onClick={navigateToTeacherHome}
        >
          <ion-icon name="arrow-back-outline"></ion-icon> Back to Teacher page
        </button>
        <div className="flex gap-4">
          {/* 2 btn */}
          <button className="btn btn-sm btn-outline btn-error mt-3 border-2">
            Delete
          </button>
          {/* 3 btn */}
          <button
            className="btn btn-sm mt-3 w-16 border-zinc-400 text-1 font-bold"
            onClick={navigateToCreateForm}
          >
            Edit
          </button>
        </div>
      </div>
      {/* ** */}

      {/* ***** first grid card */}
      <div className="grid grid-rows-4 grid-cols-[1fr_1fr] p-4 text-left w-96">
        <span> <b>Title:</b></span>
        <span>
          <b>{flowForPreview.title} </b>
        </span>

        <span> <b> Description:</b></span>
        <span>{flowForPreview.description}</span>

        <span> <b> Level: </b></span>
        <span>{flowForPreview.level}</span>

        <span> <b> Pranayama:</b></span>
        <span>{flowForPreview.pranayamas.join(", ")}</span>
      </div>
      <br />
      <div>
        <span className="underline decoration-solid decoration-sky-500"> Warmups:</span>
      </div>

      {/* ***** warmUps card */}
      <div className="flex gap-5 pb-5">
        {selectedWarmups.map((i, index) => (
          <div
            className="card card-compact w-32 bg-base-100 shadow-xl "
            key={index}
          >
            <figure>
              <img src={i.url} alt="created cards with asanas flex " />
            </figure>
          </div>
        ))}
      </div>

      {/* *** map through asanas */}
      <p>
        <span className="underline decoration-solid decoration-sky-500">Asanas :</span>
      </p>
      <div className="flex flex-wrap gap-5">
        {selectedAsanas.map((i, index) => (
          <div
            className="card card-compact w-32 bg-base-100 shadow-xl "
            key={index}
          >
            <figure>
              <img src={i.url} alt="created cards with asanas flex " />
            </figure>
            <div className="card-body ">
              <p>
                <b> {i.display_name} </b>
              </p>
              <p>{i.sanskrit_names[0].latin}</p>
    
            </div>
          </div>
        ))}
      </div>

      {/* **** meditation  and savasana*/}
      <div>
        <p>
          <span className="underline decoration-solid decoration-sky-500">
            Meditation :
          </span>
          {flowForPreview.meditation}

        </p>

        <p>
          <span className="underline decoration-solid decoration-sky-500">
            Savasana :
          </span>
          {flowForPreview.savasana}
          <audio controls>
            <source src='https://eu-develop.backendless.com/D8C813D1-AE61-B229-FF42-99D74F017600/console/files/view/yoga-audio-files/good-night-160166.mp3' type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </p>
      </div>

      {/* ***** end */}
    </div>
  );
}

export default Preview;
