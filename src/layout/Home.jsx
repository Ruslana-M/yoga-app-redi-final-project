import React from "react";
import dataJson from "../data/data-asana.json";

function Home() {
  return (
    <div className="hero bg-base-200 min-h-screen flex flex-col">
      <div className="hero-content text-center overflow-hidden w-full flex flex-col p-4">
        <h2 className="text-3xl font-bold">Namaste</h2>
        <p className="py-6">
          Yoga practice improves flexibility, increases strength and reduces
          stress. Our app aimed to help you to create your own practice, using a
          large selection of yoga poses, selecting by category and difficulty.
          Every pose features clear images and detailed instructions that you
          perform poses correctly. Roll out your mat, make your selections and
          start your own created practice.
        </p>
      </div>

      <div className="w-full flex gap-5 justify-center p-4 ">
        {dataJson.asanas.map((i, index) => (
          <div
            className="card card-compact w-36 bg-base-100 shadow-xl "
            key={index}
          >
            <figure>
              <img src={i.url} alt="image of created cards with asanas" />
            </figure>
            <div className="card-body">
              <h5 className="card-title">Description</h5>
              <p>{i.difficulty}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-sm">See more</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
