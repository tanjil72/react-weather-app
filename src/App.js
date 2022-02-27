import "./App.css";
import Header from "./Components/Header";
import SearchBox from "./Components/SearchBox";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBox />
      
      <div id="imgContainer">
        <div style={{display:'flex',flexDirection:'column'}}>
        <text style={{color:"white",fontSize:"30px",alignItems:'center'}}>Hello world</text>
        <text style={{placeItems:'flex-start'}}>Hello world</text>
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
