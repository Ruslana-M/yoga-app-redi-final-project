
import dataJson from "../data/data-asana.json";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//  recieve here props
// set const for array of selected asanas from database
//  filtered out through objects the selected asanas ids : dataJson.asanas.filter((a) => asanaIds.includes(a.id))
// in return checked if we get data from BE data

function Preview({ flowForPreview }) {
  const navigate = useNavigate();


  // array of selected asanas ids  [4, 1, 3] in our data table
  const asanaIds = flowForPreview.asanas;

  // looping here to filter out selected asana's objects from datajson
  const selectedAsanas = dataJson.asanas.filter((a) => asanaIds.includes(a.id));

  // for (let i = 0; i < dataJson.asanas.length; i++) {
  //   const element = dataJson.asanas[i];
  //   if (element.id == flowForPreview.warmUps[0]) {
  //     console.log(element);
  //   }
  // }

  return (
    <div>
      <p> {flowForPreview.title}</p>
      <p> {flowForPreview.description} </p>
      <p> {flowForPreview.level} </p>
    </div>
  );
}

export default Preview;
