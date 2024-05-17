
import React, { useState, useEffect } from "react";
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
import SearchResults from "./screens/SearchResults";
import { UserContext } from "./userContext";
import MyBlogs from "./components/Blogs/myBlogs";
import MyBlogsSinglePost from "./components/Blogs/myBlogsSinglePost";

function App() {

  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = sessionStorage.getItem('currentUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    if (currentUser) {
      sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
    } else {
      sessionStorage.removeItem('currentUser');
    }
  }, [currentUser]);

  return (
    <BrowserRouter>
    <div className="App">
    <NavBar/>
      <main>
        <UserContext.Provider value={{currentUser,setCurrentUser}}>
          <Routes>
            <Route path="/" element={<HomeScreen/>} />
            <Route path="/historicalplaces" element={<HistoricalPlaces/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/detail-page/:id" element={<DetailPage/>}/>
            <Route path="/beyondhistory" element={<BeyondHistory/>}/>
            <Route path="/localdelights" element={<LocalDelights/>}/>
            <Route path="/services" element={<ServicesPage/>}/>
            <Route path="/favourites" element={<Favourite/>}/>
            <Route path="/all-items" element={<AllItems/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/blog/:id" element={<SinglePost/>}/>
            <Route path="/write/:id" element={<Write/>}/>
            <Route path='/search-results' element={<SearchResults/>}/>
            <Route path="/write" element={<Write/>}/>
            <Route path="/myblogs" element={<MyBlogs/>}/>
            <Route path="/myblogs/:id" element={<MyBlogsSinglePost/>}/>
        </Routes>
        </UserContext.Provider>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
