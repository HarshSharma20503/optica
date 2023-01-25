import React from 'react';
import { Route, Routes } from "react-router-dom";

import Home from "./routes/Home/Home";
import Team from "./routes/Team/Team";
import Alumni  from "./routes/Alumni/Alumni";
import Events from './routes/Events/Events';
import Gallery from './routes/Gallery/Gallery';

import './App.css';
import "./index.css";
import Mentors from './routes/MentorDetails/Mentors';


function App() {
  return (
   <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path='/mentors' element={<Mentors/>} />
      </Routes>
   </>
  );
}

export default App;
