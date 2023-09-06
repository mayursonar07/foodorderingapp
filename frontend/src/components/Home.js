import React, { useEffect, useState } from 'react'
import AddressInput from './AddressInput'
import * as Constants from '../constants/index'
import RestaurantList from './RestaurantList';
import { AbsoluteCenter, Box, CircularProgress, Divider, Text, Wrap } from '@chakra-ui/react';
import ErrorComponent from './ErrorComponent';

const Home = () => {
  const [isState, setMyState] = useState(false);
  const [isLocationSet, setlocation] = useState(false);
  const [appData, setAppData] = useState('');
  const [error, setError] = useState(false);
  
  const fetchDataForLocation = async () => {
    console.log("fetch data for location");
    try {
      const response = await fetch (Constants.SWIGGY_MAIN_API)
      if (response.status == 200) {
        const data = await response.json();
        console.log(data);
        setAppData(data);
        setMyState(true);
      } else {
        const response = await fetch (Constants.SWIGGY_MOBILE_API)
        const data = await response.json();
        console.log(data);
        setAppData(data);
        setMyState(true);
      }
    } catch {
      setError(true);
    }
    // const response = fetch (Constants.SWIGGY_MAIN_API)
    //     .then((response)=>{
    //         return response.json();
    //     })
    //     .then((data)=>{
    //         console.log(data);
    //         setAppData(data);
    //         setMyState(true);
    //         //console.log(mainAPIResponse);
    //     })
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
    let resList = appData.data.cards[5].card.card?.gridElements?.infoWithStyle.restaurants; 
    if (appData.data.cards[5].card.card?.gridElements?.infoWithStyle.restaurants == undefined){
      resList = appData.data.cards[3].card.card?.gridElements?.infoWithStyle.restaurants
    } 

    return (
      <>
      <Text fontSize='xl' fontWeight='bold' mt='20px' p='20px'>{appData.data.cards[3].card.card?.title}</Text>
      <Divider/>
      {/* Restaurant data received */}
      <Wrap spacing='25px'>
        <RestaurantList restaurantList={resList}/>
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
  if(error) {
    return(
      <ErrorComponent/>
    )
  }
  return (
    <>
    <AbsoluteCenter>
      <CircularProgress isIndeterminate  />
    </AbsoluteCenter>
    </>
  )
}

export default Home
