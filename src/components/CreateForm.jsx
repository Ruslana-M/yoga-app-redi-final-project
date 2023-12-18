import Backendless from "backendless";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import dataJson from "../data/data-asana.json";


// for React-Select  https://react-select.com/home   npm i react-select
// Import the default export and render in your component:  const options = [
//   { value: 'chocolate', label: 'Chocolate' }], used label htmlFor, 

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

function CreateForm({setFlowForPreview}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [level, setLevel] = useState("beginner");
  const [pranayamas, setPranayamas] = useState([]);
  const [warmups, setWarmups] = useState([]);
  const [asanas, setAsanas] = useState([]);
  const [meditationFile, setMeditationFile] = useState();
  const [savasanaFile, setSavasanaFile] = useState();

  const navigate = useNavigate();

  function navigateToTeacherHome() {
    navigate("/teacherHome");
  }
// save to BE
  function onSaveYogaFlow() {
    const yogaClass = {
      title: title,
      description: description,
      level: level,
      pranayamas: pranayamas,
      warmUps: warmups,
      asanas: asanas,
      meditation: meditationFile,
      savasana: savasanaFile,
     
    };
    Backendless.Data.of("tamplate")
      .save(yogaClass)
      .then((res) => {
        console.log(res + "new contact has been saved");
        setFlowForPreview(res)
        navigate(`/preview`);    

      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="main-container  bg-base-200 min-h-screen pt-2">
      <button
        className=" flex justify-between btn btn-sm border-zinc-300 text-l ml-3 font-bold"
        onClick={navigateToTeacherHome}
      >
        <ion-icon name="arrow-back-outline"></ion-icon> Back to Create Yoga
        Class
      </button>
      <div className="flex flex-col sm:flex-row">
        {/* container 1 */}
        <div className="flex flex-col items-end sm:w-1/2">
          {/* first div*/}
          <div className="w-full p-2">
            <div className=" card flex flex-center justify-between shadow-2xl bg-base-100">
              <div className="card-body grid grid-rows-3 grid-cols-[1fr_3fr] p-4 border-zinc-300 ">
                <label className="label">Title:</label>
                <input
                  className="border border-zinc-300"
                  type="text"
                  name="title"
                  onChange={(e) => setTitle(e.target.value)}
                />

                <label className="label">Description:</label>
                <input
                  className="border border-zinc-300"
                  type="text"
                  name="description"
                  onChange={(e) => setDescription(e.target.value)}
                />

                {/* level needs multiple selector - React selector */}
                <label className="label" htmlFor="levels">
                  Level:
                </label>
                <Select
                  id="levels"
                  defaultValue={[]}
                  isMulti={false}
                  options={levelOptions}
                  placeholder="Select Level"
                  onChange={(opt) => setLevel(opt.value)}  
                />
              </div>
            </div>
          </div>

          {/* second div */}
          <div className="w-full p-2">
            <div className=" card flex flex-center shadow-2xl bg-base-100">
              <div className="card-body grid grid-rows-5 grid-cols-[1fr_3fr] place-items-center p-4 border-zinc-300 ">
                <label htmlFor="pranayama" className="label">
                  Pranayamas:
                </label>
                {/* // React Select component + map of selected options     
                onChange={(opt) => setWarmups(opt.value)}  // option is one element of the options array  take one that user click and set it to state variable
                  onChange={(selectedOptions) => {
                  const newValue = selectedOptions.map(opt => opt.value)   // map through selectedOptions - are multiple elements of the options array  take all that user clicked and set it to state variable
                */}
                <Select
                  id="pranayama"
                  className="w-full"
                  closeMenuOnSelect={false}
                  defaultValue={[]}
                  isMulti
                  options={pranayamaOptions}
                  isSearchable={true}
                  placeholder="Select Pranayamas"
                  onChange={(selectedOptions) => {
                    const newValue = selectedOptions.map(opt => opt.value)
                    setPranayamas(newValue)
                  }}
                />

                {/* //  htmlFor  react select  */}

                <label className="label" htmlFor="warmups">
                  Warm ups:
                </label>
                <Select
                  id="warmups"
                  className="w-full"
                  closeMenuOnSelect={false}
                  defaultValue={[]}
                  isMulti
                  options={asanaOptions} // options array
                  isSearchable={true}
                  placeholder="Select Warmups"
                  onChange={(selectedOptions) => {
                    const newValue = selectedOptions.map(opt => opt.value)
                    setWarmups(newValue)
                  }} // map through selectedOptions - are multiple elements of the options array  take all that user clicked and set it to state variable
                />

                <label htmlFor="asanas" className="label">
                  Asanas:
                </label>
                <Select
                  id="asanas"
                  className="w-full"
                  closeMenuOnSelect={false}
                  defaultValue={[]}
                  isMulti
                  options={asanaOptions}
                  isSearchable={true}
                  placeholder="Select Asana"
                  onChange={(selectedOptions) => {
                    const newValue = selectedOptions.map(opt => opt.value)
                    setAsanas(newValue)
                  }}
                />

                <label className="label">Meditation:</label>
                <input
                className="w-full"
                  type="file"
                  accept=".mp3"
                  name="meditation"
                  onChange={(e) => setMeditationFile(e.target.value)}
                />

                {/* add audio file */}

                <label className="label">Savasana:</label>
                <input
                  className="w-full"
                  type="file"
                  accept=".mp3"
                  name="savasana"
                  onChange={(e) => setSavasanaFile(e.target.files[0])}
                />
              </div>
            </div>
          </div>
          {/* ******** */}
        </div>

        {/* container 2 */}
        <div className="flex flex-col p-2 pb-4 sm:w-1/2">
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

      <div className="flex justify-center">
        <button
          className=" flex  btn btn-secondary btn-md w-40 m-2 border-zinc-300  font-bold "
          onClick={onSaveYogaFlow}
        >
          Save Yoga Flow
        </button>
      </div>

      {/* end****** */}
    </div>
  );
}

export default CreateForm;
