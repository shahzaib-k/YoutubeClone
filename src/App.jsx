import React, { useState } from "react";

import "./App.css";
import Feed from "./components/Feed";
import { Route, Routes } from "react-router-dom";
import VideoDetail from "./components/VideoDetail";
import ChannelDetail from "./components/ChannelDetail";
import SearchFeed from "./components/SearchFeed";

const App = () => {  

  return (
    <>
    <Routes>
      <Route path="/" element={<Feed/>} />
      <Route path="/video/:id" element={<VideoDetail/>} /> 
      <Route path="/channel/:id" element={<ChannelDetail/>} /> 
      <Route path="/search/:searchTerm" element={<SearchFeed/>} /> 
    </Routes>
    </>
  );
};

export default App;



