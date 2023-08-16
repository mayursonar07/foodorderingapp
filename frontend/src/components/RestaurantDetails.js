import React, { useEffect, useState } from 'react'
import * as Constants from '../constants/index'
import { useLocation } from 'react-router-dom';
import { Box, CircularProgress } from '@chakra-ui/react';

const RestaurantDetails = (props) => {
    const location = useLocation();
    //const { location } = props;
    const info = location.state;

    const[restaurantMenuData, setRestaurantMenuData] = useState('');

    useEffect(()=>{

        const fetchRestaurantMenu = async () => {

            const response = await fetch(Constants.RESTAURANT_DETAIL+info.id)
            const data = await response.json();
            console.log(data);
            setRestaurantMenuData(data.data);

        }
        fetchRestaurantMenu();
    },[])
    if(restaurantMenuData) {
        const restaurantName = restaurantMenuData.cards[0].card.card.info.name;
        // Create a list of cuisines
        const cuisines = restaurantMenuData.cards[0].card.card.info.cuisines;
        const area = restaurantMenuData.cards[0].card.card.info.areaName;
        return (
            <>
            <Box>

                <h2>{restaurantName}</h2>
                <p>CUISINES: {cuisines.join(",")}</p>
                <p>{area}</p>
            </Box>
            </>
        )
    } else {
        return (
            <>
            Fetching Restaurant details...
            <CircularProgress isIndeterminate  />
            </>
        )
    }
}

export default RestaurantDetails