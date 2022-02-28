import React from "react";
import IconComp from "./IconComp";

export default function CardComp() {
  return (
    <div style={{display:'flex',flexDirection:'column',marginRight:'10px',padding:'20px'}}>
      <text style={{marginBottom:'10px'}}>Today</text>
      <IconComp/>
      <text style={{marginTop:'10px'}}>30°C</text>
    </div>
  );
}
