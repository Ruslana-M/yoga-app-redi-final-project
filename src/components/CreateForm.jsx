import Backendless from "backendless";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import dataJson from "../data/data-asana.json";

const asanaOptions = dataJson.asanas.map((item) => {
  return {
    label: item.display_name,
    value: item.id,
  };
});

const pranayamaOptions = [
  { value: "Full Yoga Breathing", label: "Full Yoga Breathing" },
  { value: "Ujjai", label: "Ujjai" },
  { value: "Bhastrika", label: "Bhastrika" },
  { value: "Kapalabhati", label: "Kapalabhati" },
  { value: "Bhramari", label: "Bhramari" },
];

const levelOptions = [
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "expert", label: "Expert" },
];

<select name="label" id="label">
  <option value="beginner"> Beginner</option>
  <option value="intermediate"> Intermediate</option>
  <option value="expert"> Expert</option>
</select>;

function CreateForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [level, setLevel] = useState("beginner");
  const [pranayamas, setPranayamas] = useState([]);
  const [warmups, setWarmups] = useState([]);
  const [asanas, setAsanas] = useState([]);
  const [meditationFile, setMeditationFile] = useState();
  const [savasanaFile, setSavasanaFile] = useState();

  const navigate = useNavigate();

  <select name="label" id="label">
    <option value="beginner"> Beginner</option>
    <option value="intermediate"> Intermediate</option>
    <option value="expert"> Expert</option>
  </select>;

  function navigateToCreate() {
    navigate("/teacherHome");
  }
  function navigateToPreview() {
    navigate("/preview");
  }

  function onSaveYogaFlow() {
    console.log(); // save to BEL
  }
  return (
    <div className="main-container  bg-base-200 min-h-screen pt-2">
      <button
        className=" flex justify-between btn btn-sm border-zinc-300 text-l ml-3 font-bold"
        onClick={navigateToCreate}
      >
        <ion-icon name="arrow-back-outline"></ion-icon> Back to Create Yoga
        Class
      </button>
      <div className="flex">
         {/* container 1 */}
        <div className="flex flex-col items-end w-1/2">
          {/* first div*/}
          <div className="w-full p-2">
            <div className=" card flex flex-center justify-between shadow-2xl bg-base-100">
              <div className="card-body flex flex-col gap-3 p-4 border-zinc-300 ">
                <div className="flex ">
                  <label className="label">Title</label>
                  <input
                    className=""
                    type="text"
                    name="title"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="flex ">
                  <label className="label">Description</label>
                  <input
                    className=""
                    type="text"
                    name="description"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>

                {/* level need selector */}
                <div className="flex ">
                  <label className="label" htmlFor="levels">
                    Level :{" "}
                  </label>
                  <Select
                    id="levels"
                    className="w-3/4"
                    defaultValue={[]}
                    isMulti={false}
                    options={levelOptions}
                    placeholder="Select Level"
                    onChange={(opt) => setLevel(opt.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* second div */}
          <div className="w-full p-2">
            <div className=" card flex flex-center shadow-2xl bg-base-100">
              <div className="card-body flex flex-col gap-3 p-4 border-zinc-300 ">
                <div className="flex ">
                  <label htmlFor="pranayama" className="label">
                    Pranayamas :
                  </label>
                  <Select
                    id="pranayama"
                    className="w-3/4"
                    closeMenuOnSelect={false}
                    defaultValue={[]}
                    isMulti
                    options={pranayamaOptions}
                    isSearchable={true}
                    placeholder="Select Pranayamas"
                    onChange={(opt) => setPranayamas(opt.value)}
                  />
                </div>

                <div className="flex ">
                  <label className="label" htmlFor="warmups">
                    Warm ups
                  </label>
                  <Select
                    id="warmups"
                    className="w-3/4"
                    closeMenuOnSelect={false}
                    defaultValue={[]}
                    isMulti
                    options={asanaOptions}
                    isSearchable={true}
                    placeholder="Select Warmups"
                    onChange={(opt) => setWarmups(opt.value)}
                  />
                </div>

                <div className="flex ">
                  <label htmlFor="asanas" className="label">
                    Asanas :
                  </label>
                  <Select
                    id="asanas"
                    className="w-3/4"
                    closeMenuOnSelect={false}
                    defaultValue={[]}
                    isMulti
                    options={asanaOptions}
                    isSearchable={true}
                    placeholder="Select Asana"
                    onChange={(opt) => setAsanas(opt.value)}
                  />
                </div>

                <div className="flex ">
                  <label className="label">Meditation</label>
                  <input
                    type="file"
                    accept=".mp3"
                    name="meditation"
                    onChange={(e) => setMeditationFile(e.target.value)}
                  />
                </div>
                {/* add audio file */}
                <div className="flex ">
                  <label className="label">Savasana</label>
                  <input
                    className=""
                    type="file"
                    accept=".mp3"
                    name="savasana"
                    onChange={(e) => setSavasanaFile(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* ******** */}
          <button
            className=" flex  btn btn-secondary btn-md w-40 m-2 border-zinc-300  font-bold"
            onClick={onSaveYogaFlow}
          >
            Save Yoga Flow
          </button>
        </div>

        {/* container 2 */}
        <div className="flex flex-col w-1/2 p-2 pb-4">
          <div className="card flex-center shadow-2xl bg-base-100">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHQ_eO17Knn7E9YUnZSeuaiUp8E_gr0CXnWQ&usqp=CAU"
              alt="video of the class"
              className="p-8"
            />
            <button className=" btn btn-sm w-40 ml-10 mb-10 border-zinc-300 text-l font-bold ">
              + Upload Video
            </button>
          </div>
        </div>
      </div>

      {/* end****** */}
    </div>
  );
}

export default CreateForm;
