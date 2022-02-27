import "./App.css";
import Header from "./Components/Header";
import SearchBox from "./Components/SearchBox";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBox />
      <div id="imgContainer">
        <text>Hello world</text>
      </div>
    </div>
  );
}

export default App;
