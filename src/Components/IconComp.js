import React from 'react'

export default function IconComp({icon,width,height}) {
  return (
    <div>
        <img
          src={
            icon
              ? require("../icons/" + icon + ".png")
              : require("../icons/clear-day.png")
          }
          width={width}
          height={height}
          alt="Weather forecast"
        />
    </div>
  )
}
