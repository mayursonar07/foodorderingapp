import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Home from './components/Home';
import RestaurantDetails from './components/RestaurantDetails';
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'
import theme from './theme';
import SearchComp from './components/SearchComp';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <div className="App">
          <div>
            <div className="container">
              <NavigationBar />
              {/* <Home/>           */}
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/search' element={<SearchComp/>}/>
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