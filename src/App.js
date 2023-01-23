import React from 'react';
import { Route, Routes } from "react-router-dom";

import Home from "./routes/Home/Home";
import Team from "./routes/Team/Team";
import Alumni  from "./routes/Alumni/Alumni";
import Events from './routes/Events/Events';

import './App.css';
import "./index.css";


function App() {
  return (
   <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/events" element={<Events />} />
        
      </Routes>
   </>
  );
}

export default App;
