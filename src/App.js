import React from "react";
import './App.css';
import {BrowserRouter, Route,Routes } from 'react-router-dom';
import HomeScreen from './screens/homescreens';
import NavBar from "./components/NavBar/navBar";
import HistoricalPlaces from "./screens/HistoricalPlaces";
import AboutPage from "./screens/About";
import Footer from "./components/Footer/Footer";
import DetailPage from "./screens/DetailPage";
import BeyondHistory from "./screens/BeyondHistoryPage";
import LogicalDelights from "./screens/LogicalDelights";
import SupportCenterPage from "./screens/SupportCenterPage";



function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <NavBar/>
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen/>} />
          <Route path="/historicalplaces" element={<HistoricalPlaces/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/detail-page" element={<DetailPage/>}/>
          <Route path="/beyondhistory" element={<BeyondHistory/>}/>
          <Route path="/logicaldelights" element={<LogicalDelights/>}/>
          <Route path="/supportcenter" element={<SupportCenterPage/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
