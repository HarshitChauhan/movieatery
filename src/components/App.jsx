import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Movies from './Movies/Movies';
import MovieInformation from './MovieInformation/MovieInformation';
import Actors from './Actors/Actors';
import Profile from './Profile/Profile';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <h1>Welcome to Movieatery!</h1>
      <main>
        <Routes>
          <Route exact path="/" element={<Movies />} />
          <Route exact path="/movie/:id" element={<MovieInformation />} />
          <Route exact path="/actors/:id" element={<Actors />} />
          <Route exact path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
