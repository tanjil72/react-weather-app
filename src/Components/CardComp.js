import React from "react";
import IconComp from "./IconComp";
import CelsiusConverter from "./CelsiusConverter";

export default function CardComp({ date, temp, icon }) {
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
    <div className="card">
      <text style={{ marginBottom: "10px" }}>{GetDayName(DayName)}</text>
      <IconComp icon={icon} />
      <CelsiusConverter temp={temp} />
    </div>
  );
}
