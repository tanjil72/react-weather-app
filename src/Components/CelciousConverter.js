import React from "react";

export default function FtoC_Converter({ temp }) {
  return (
    <div>
      <text >{Math.floor(((temp - 32) * 5) / 9)}°C</text>
    </div>
  );
}
