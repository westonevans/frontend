import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import TopBanner from '../Blah';
import MyMovieList from '../MovieList';
import MyPodcasts from '../Podcasts';
import Navbar from '../Navbar';
import Header from '../Header';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header slogan="Only the best movies" />
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/movies" element={<MyMovieList />} />
            <Route path="/podcasts" element={<MyPodcasts />} />
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
