import React, { useState } from "react";
import CardComp from "./CardComp";
import CelciousConverter from "./CelciousConverter";

export default function SearchBox() {
  const [data, setData] = useState("");
  const [address, setAddress] = useState("");
  const [search, setSearch] = useState();

  function Capitalize(str) {
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
        <text style={{ fontSize: "40px" }}>{Capitalize(address)}</text>

        <div style={{ fontSize: "60px", fontWeight: "bold" }}>
          <CelciousConverter temp={data.temp} />
        </div>

        <img
          src={
            data.icon
              ? require("../icons/" + data.icon + ".png")
              : require("../icons/clear-day.png")
          }
          width="100px"
          height="100px"
          alt="Weather forecast"
        />

        <text style={{ fontSize: "20px", marginBottom: "10px" }}>
          {data.conditions}
        </text>
        <text style={{ fontSize: "20px", marginRight: "5px" }}>
          Humidity: {Math.ceil(data.humidity)}%
        </text>
        <div style={{ display: "flex", flexDirection: "row",marginTop:'20px' }}>
          <CardComp />
          <CardComp />
          <CardComp />
          <CardComp />
          <CardComp />
        </div>
      </div>
    </div>
  );
}
