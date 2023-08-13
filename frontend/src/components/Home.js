import React, { useEffect, useState } from 'react'
import AddressInput from './AddressInput'
import * as Constants from '../constants/index'
import RestaurantList from './RestaurantList';

const Home = () => {
  const [isState, setMyState] = useState(false);
  const [isLocationSet, setlocation] = useState(false);
  const [appData, setAppData] = useState('');
  
  useEffect(()=>{
    const location = localStorage.getItem('location');
    if (location && !appData) {
      fetchDataForLocation();
      //setMyState(true);
    }
  }, [isLocationSet])

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
      {/* Restaurant data received */}
      <RestaurantList restaurantList={appData.data.cards[5].card.card.gridElements.infoWithStyle.restaurants}/>
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
    Loading....
    </>
  )
}

export default Home
