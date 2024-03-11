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
import LocalDelights from "./screens/LocalDelights";
import SupportCenterPage from "./screens/SupportCenterPage";
import Favourite from "./screens/favourite";



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
          <Route path="/localdelights" element={<LocalDelights/>}/>
          <Route path="/supportcenter" element={<SupportCenterPage/>}/>
          <Route path="/favourites" element={<Favourite/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
