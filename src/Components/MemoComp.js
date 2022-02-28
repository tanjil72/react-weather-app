import React,{useEffect,useState} from "react";
function MemoComp() {

    const [data, setData] = useState("");
    const [address,setAddress]=useState("")

  
    useEffect(() => {
      fetch(
        "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK?key=8P7YRBM9KTYWBRJJ7NKSGZ2ED",
        {}
      )
        .then((response) => response.json())
        .then((Jsonresponse) => {
          setData(Jsonresponse.currentConditions);
          console.log(Jsonresponse)
          setAddress(Jsonresponse.address)
        })
        .catch((err) => {
          console.error(err);
        });
    });

  return (
    <div id="imgContainer">
      <text style={{ fontSize: "50px" }}>{address}</text>
      <text style={{ fontSize: "40px", fontWeight: "bold" }}>{data.temp} °F</text>
      <div>
        <img
          src="https://cdn-icons.flaticon.com/png/512/3222/premium/3222807.png?token=exp=1646024866~hmac=baafabc8c667338dc6806fea52889145"
          width="70px"
          height="70px"
          alt="Weather forecast"
        />
      </div>
      <text style={{ fontSize: "20px", marginBottom: "10px" }}>{data.conditions}</text>
      <text style={{ fontSize: "20px" }}>{data.time}</text>
    </div>
  );
}

export default React.memo(MemoComp);
