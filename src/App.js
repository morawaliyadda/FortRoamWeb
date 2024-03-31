import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/homescreens';
import NavBar from "./components/NavBar/navBar";
import HistoricalPlaces from "./screens/HistoricalPlaces";
import AboutPage from "./screens/About";
import Footer from "./components/Footer/Footer";
import DetailPage from "./screens/DetailPage";
import BeyondHistory from "./screens/BeyondHistoryPage";
import LocalDelights from "./screens/LocalDelights";
import ServicesPage from "./screens/ServicesPage";
import Favourite from "./screens/favourite";
import AllItems from "./screens/AllItems";
import Blog from "./components/Blogs/Blog";
import SinglePost from "./components/Blogs/singlePost";
import Write from "./components/Blogs/write";



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
          <Route path="/services" element={<ServicesPage/>}/>
          <Route path="/favourites" element={<Favourite/>}/>
          <Route path="/all-items" element={<AllItems/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/blog/:id" element={<SinglePost/>}/>
          <Route path="/write" element={<Write/>}/>

        </Routes>
      </main>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
