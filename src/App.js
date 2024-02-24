import React from "react";
import './App.css';
import {BrowserRouter, Route,Routes } from 'react-router-dom';
import HomeScreen from './screens/homescreens';
import NavBar from "./components/NavBar/navBar";
import HistoricalPlaces from "./screens/HistoricalPlaces";



function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <NavBar/>
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen/>} />
          <Route path="/historicalplaces" element={<HistoricalPlaces/>}/>


         
        </Routes>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
