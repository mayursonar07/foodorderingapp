import React, { useEffect } from 'react'
import * as Constants from '../constants/index'

const RestaurantDetails = (info) => {
    console.log("Restaurant details: ", info);
    useEffect(()=>{

        const fetchRestaurantMenu = async () => {

            const response = await fetch(Constants.RESTAURANT_DETAIL+info.id)
            const data = await response.json();
            console.log(data);

        }
        fetchRestaurantMenu();
    })
  return (
    <div>RestaurantDetails</div>
  )
}

export default RestaurantDetails