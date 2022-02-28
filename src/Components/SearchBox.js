import React, { useState, useEffect } from "react";
import FtoC_Converter from "./FtoC_Converter";
import MemoComp from "./MemoComp";

export default function SearchBox() {
  const [data, setData] = useState("");
  const [address, setAddress] = useState("");
  const [search, setSearch] = useState();

  function handleclick() {
    fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${search}?key=XUGYEAM5JEZ4DKTFZ8W58T4NW`,
      {}
    )
      .then((response) => response.json())
      .then((Jsonresponse) => {
        setData(Jsonresponse.currentConditions);
        console.log(Jsonresponse);
        setAddress(Jsonresponse.address);
      })
      .catch((err) => {
        console.error(err);
      });
    //console.log(search);
  }

  return (
    <div>
      <input
        className="searchBox"
        type="text"
        placeholder="Search City"
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <button id="searchButton" onClick={handleclick}>
        Search
      </button>
      <div id="imgContainer">
        <text style={{ fontSize: "50px" }}>{address}</text>
        <FtoC_Converter temp={data.temp}/>
        <div>
          <img
            src="https://cdn-icons.flaticon.com/png/512/3222/premium/3222807.png?token=exp=1646024866~hmac=baafabc8c667338dc6806fea52889145"
            width="70px"
            height="70px"
            alt="Weather forecast"
          />
        </div>
        <text style={{ fontSize: "20px", marginBottom: "10px" }}>
          {data.conditions}
        </text>
        <text style={{ fontSize: "20px" }}>{data.time}</text>
      </div>
    </div>
  );
}
