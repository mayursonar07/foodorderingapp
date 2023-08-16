import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Home from './components/Home';
import RestaurantDetails from './components/RestaurantDetails';
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <div className="App">
          <div>
            <div className="container">
              <NavigationBar />
              {/* <Home/>           */}
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/card/:id' element={<RestaurantDetails/>}/>
              </Routes>
            </div>
          </div>

        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App