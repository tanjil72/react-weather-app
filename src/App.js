import React from "react";
import "./App.css";
import Header from "./Components/Header";
import SearchBox from "./Components/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import {bindActionCreators} from 'redux';
import {actionCreators} from './state/index'
//import { depositMoney } from "./state/action-creator";


function App() {
  const data=useSelector((state)=>state.account.items.items)
  // console.log(data.address)
  const dispatch=useDispatch()
  const AC=bindActionCreators(actionCreators,dispatch);
  // console.log(AC)

  return (

      <div className="App">
        <Header />
        {/* <SearchBox /> */}
        <h1>h</h1>
        <button onClick={()=>AC.fetchProducts('Kushtia')}>Deposit</button>
        {/* <button onClick={()=>AC.withdrawMoney(500)}>Withdraw</button> */}
      </div>
  );
}

export default App;
