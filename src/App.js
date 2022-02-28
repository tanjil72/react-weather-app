import React from "react";
import "./App.css";
import Header from "./Components/Header";
import MemoComp from "./Components/MemoComp";
import SearchBox from "./Components/SearchBox";

function App() {
 

  return (
    <div className="App">
      <Header />
      <SearchBox />
      <MemoComp/>
    </div>
  );
}

export default App;
