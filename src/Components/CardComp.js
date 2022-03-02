import React from "react";
import IconComp from "./IconComp";
import CelciousConverter from "./CelciousConverter";

export default function CardComp({ date, temp,icon }) {
  let day = new Date(date);
  let DayName = day.getDay();

  function GetDayName(day) {
    switch (day) {
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";

      case 4:
        return "Thursday";

      case 5:
        return "Friday";

      case 6:
        return "Saturday";

      case 0:
        return "Sunday";
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginRight: "10px",
        padding: "20px",
      }}
    >
      <text style={{ marginBottom: "10px" }}>{GetDayName(DayName)}</text>
      <IconComp icon={icon} />
      <CelciousConverter temp={temp} />
    </div>
  );
}
