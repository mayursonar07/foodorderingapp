import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <div className="App">
        <div>

          <div className="container">
            <NavigationBar />
            <Home/>
            {/* <Footer /> */}
          </div>
        </div>

      </div>
    </Router>
  );
}

export default App