import React, { useEffect, useState } from 'react'
import AddressInput from './AddressInput'
import * as Constants from '../constants/index'
import RestaurantList from './RestaurantList';
import { Box, CircularProgress, Text, Wrap } from '@chakra-ui/react';

const Home = () => {
  const [isState, setMyState] = useState(false);
  const [isLocationSet, setlocation] = useState(false);
  const [appData, setAppData] = useState('');
  
  const fetchDataForLocation = () => {
    console.log("fetch data for location")
    const response = fetch (Constants.SWIGGY_MAIN_API)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            console.log(data);
            setAppData(data);
            setMyState(true);
            //console.log(mainAPIResponse);
        })
  }

  useEffect(()=>{
    const location = localStorage.getItem('location');
    if (location && !appData) {
      fetchDataForLocation();
      //setMyState(true);
    }
  }, [isLocationSet])

  const getHomePageData = (lat, lng) => {

    // Store the latitude and longitude in Local Storage
    if (lat && lng) {
      setlocation(true);
      localStorage.setItem("location", {
          'latitude': lat,
          'longitude': lng
      });
    }
  }

  if (isState) {
    return (
      <>
      <Text fontSize='3xl' fontWeight='bold'>{appData.data.cards[3].card.card.title}</Text>
      
      {/* Restaurant data received */}
      <Wrap spacing='10px'>
        <RestaurantList restaurantList={appData.data.cards[5].card.card.gridElements.infoWithStyle.restaurants}/>
      </Wrap>
      </>
    )
  }
  if(!isLocationSet && !localStorage.getItem('location')) {
    return (
      <>
      <AddressInput onLocationUpdate={getHomePageData}/>
      </>

    )
  }
  return (
    <>
    <CircularProgress isIndeterminate  />
    </>
  )
}

export default Home
