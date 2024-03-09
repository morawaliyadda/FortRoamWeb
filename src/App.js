import React from "react";
import './App.css';
import {BrowserRouter, Route,Routes } from 'react-router-dom';
import HomeScreen from './screens/homescreens';
import NavBar from "./components/NavBar/navBar";
import HistoricalPlaces from "./screens/HistoricalPlaces";
import AboutPage from "./screens/About";
import Footer from "./components/Footer/Footer";
import Detail_Page from "./screens/Detail_Page";
import BeyondHistory from "./screens/Beyond_history_page";



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
          <Route path="/detail-page" element={<Detail_Page/>}/>
          <Route path="/beyondhistory" element={<BeyondHistory/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
