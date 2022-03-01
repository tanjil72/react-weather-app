import React from "react";
import "./App.css";
import Header from "./Components/Header";
import SearchBox from "./Components/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import {bindActionCreators} from 'redux';
import {actionCreators} from './state/index'
import { depositMoney } from "./state/action-creator";


function App() {


  const account=useSelector((state)=>state.account)
  const dispatch=useDispatch()

  const AC=bindActionCreators(actionCreators,dispatch);

  return (

      <div className="App">
        <Header />
        {/* <SearchBox /> */}
        <h1>Balance:{account}</h1>
        <button onClick={()=>AC.depositMoney(500)}>Deposit</button>
        <button onClick={()=>AC.withdrawMoney(500)}>Withdraw</button>
      </div>
  );
}

export default App;
