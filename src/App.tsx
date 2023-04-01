import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import TopBanner from './Blah';
import MovieList from './Movies';
import Podcasts from './Podcasts';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/movies" element={<MovieList />} />
            <Route path="/podcasts" element={<Podcasts />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="App">
        <TopBanner saying="Joel's Movie Site -Home" />
      </div>
      <div className="col-5">
        <img src="./JoelHiltonHeadshot.jpg" alt="Joel" />
      </div>
    </div>
  );
}

export default App;
