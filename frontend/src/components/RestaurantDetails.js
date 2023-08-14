import React, { useEffect } from 'react'
import * as Constants from '../constants/index'
import { useLocation } from 'react-router-dom';

const RestaurantDetails = (props) => {
    const location = useLocation();
    //const { location } = props;
    const info = location.state;

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