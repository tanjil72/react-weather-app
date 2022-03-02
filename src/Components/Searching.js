import React, { useEffect, useState } from "react";
import CardComp from "./CardComp";
import CelsiusConverter from "./CelsiusConverter";
import IconComp from "./IconComp";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

export default function Search() {
  const [search, setSearch] = useState();

  const data = useSelector((state) => state.account.items.items);
  //   console.log(data)

  const dispatch = useDispatch();
  const actionCreator = bindActionCreators(actionCreators, dispatch);

  function getData() {
    actionCreator.fetchWeather();
  }

  useEffect(() => {
    getData();
  }, []);

  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function handleSearch() {
    actionCreator.searchWeather(search);
  }

  return (
    <div className="container">
      <div className="searchContainer">
        <input
          className="searchBox"
          type="text"
          placeholder="Search City"
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <button id="searchButton" onClick={handleSearch}>
          Search
        </button>
      </div>

      {data ? (
        <div className="infoContainer">
          <text style={{ fontSize: "40px" }}>{Capitalize(data.address)}</text>
          <text style={{ fontSize: "50px", fontWeight: "bolder" }}>
            <CelsiusConverter temp={data.currentConditions.temp} />
          </text>
          <IconComp
            icon={data.currentConditions.icon}
            width="100px"
            height="100px"
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "10px",
            }}
          >
            <text style={{ fontSize: "20px", marginBottom: "10px" }}>
              {data.currentConditions.conditions}
            </text>
            <text style={{ fontSize: "20px", marginRight: "5px" }}>
              Humidity: {Math.ceil(data.currentConditions.humidity)}%
            </text>
          </div>
          <div class="float-container">
            <div class="flex-container">
              <div class="flex-child ">
                <CardComp
                  date={data.days[0].datetime}
                  temp={data.days[0].temp}
                  icon={data.days[0].icon}
                />
              </div>
              <div class="flex-child ">
                <CardComp
                  date={data.days[1].datetime}
                  temp={data.days[1].temp}
                  icon={data.days[1].icon}
                />
              </div>
              <div class="flex-child ">
                <CardComp
                  date={data.days[2].datetime}
                  temp={data.days[2].temp}
                  icon={data.days[2].icon}
                />
              </div>
              <div class="flex-child ">
                <CardComp
                  date={data.days[3].datetime}
                  temp={data.days[3].temp}
                  icon={data.days[3].icon}
                />
              </div>
              <div class="flex-child ">
                <CardComp
                  date={data.days[4].datetime}
                  temp={data.days[4].temp}
                  icon={data.days[4].icon}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>Loading Weather Data....</h1>
      )}
    </div>
  );
}
