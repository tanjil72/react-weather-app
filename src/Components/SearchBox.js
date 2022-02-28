import React, { useState } from "react";
import CelciousConverter from "./CelciousConverter";

export default function SearchBox() {
  const [data, setData] = useState("");
  const [address, setAddress] = useState("");
  const [search, setSearch] = useState();

 
  function Capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
    }


  function handleSearch() {
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
      <button id="searchButton" onClick={handleSearch}>
        Search
      </button>
      <div id="imgContainer">
        <text style={{ fontSize: "50px" }}>{Capitalize(address)}</text>
        <CelciousConverter temp={data.temp}/>
        <div>
          <img
            src={data.icon?require('../icons/'+data.icon+'.png'):require('../icons/clear-day.png')}
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
