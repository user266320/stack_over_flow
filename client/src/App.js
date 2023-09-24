import { BrowserRouter } from "react-router-dom";
import Navbar from './compontents/Navbar/Navbar';
import AllRoutes from "./AllRoutes";
import './App.css';
import {useEffect } from "react";
import { useDispatch } from "react-redux";

import {  fetchAllQuestions } from './actions/questions';
import { fetchAllUsers } from "./actions/users";


function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  },[dispatch])
  
  return (
   
    <div className="App">
       <BrowserRouter>
        <Navbar/>
        <AllRoutes/>
        </BrowserRouter>
    </div>
   
  );
}

export default App;
