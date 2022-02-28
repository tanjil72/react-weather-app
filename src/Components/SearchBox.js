import React, { useEffect, useState } from "react";
import CardComp from "./CardComp";
import CelciousConverter from "./CelciousConverter";
import IconComp from "./IconComp";

export default function SearchBox() {
  const [data, setData] = useState("");
  const [address, setAddress] = useState("");
  const [search, setSearch] = useState();
  const [days, setDays] = useState();
  const [loading, setLoading] = useState(true);
  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  useEffect(() => {
    fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Dhaka?key=XUGYEAM5JEZ4DKTFZ8W58T4NW`,
      {}
    )
      .then((response) => response.json())
      .then((Jsonresponse) => {
        setData(Jsonresponse.currentConditions);
        setDays(Jsonresponse.days);
        setAddress(Jsonresponse.address);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  function handleSearch() {
    setLoading(true);
    fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${search}?key=XUGYEAM5JEZ4DKTFZ8W58T4NW`,
      {}
    )
      .then((response) => response.json())
      .then((Jsonresponse) => {
        setData(Jsonresponse.currentConditions);
        setDays(Jsonresponse.days);
        setAddress(Jsonresponse.address);
        setLoading(false);
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

        <IconComp icon={data.icon} width="100px" height="100px" />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "20px",
          }}
        >
          <text style={{ fontSize: "20px", marginBottom: "10px" }}>
            {data.conditions}
          </text>
          <text style={{ fontSize: "20px", marginRight: "5px" }}>
            Humidity: {Math.ceil(data.humidity)}%
          </text>
        </div>

        {days ?(
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "70px",
              backgroundColor: "gray",
              borderRadius: "10px",
              opacity: ".8",
            }}
          >
            <CardComp date={days[0].datetime} temp={days[0].temp} />
            <CardComp date={days[1].datetime} temp={days[1].temp} />
            <CardComp date={days[2].datetime} temp={days[2].temp} />
            <CardComp date={days[3].datetime} temp={days[3].temp} />
            <CardComp date={days[4].datetime} temp={days[4].temp} />
          </div>
        ):""}
      </div>
    </div>
  );
}
