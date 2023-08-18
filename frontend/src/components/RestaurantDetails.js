import React, { useEffect, useState } from 'react'
import * as Constants from '../constants/index'
import { useLocation } from 'react-router-dom';
import { Box, Center, CircularProgress, Text } from '@chakra-ui/react';
import MenuList from './MenuList';

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

        // Menu list
        const menuList = restaurantMenuData.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
        // Now we build menu list component
        return (
            <>
            <Box>
                <Box ml='13.7%' mt='25px' mb='30px'>

                    <Text fontWeight='bold' fontSize='4xl'>{restaurantName}</Text>
                    <Text color='gray'>CUISINES: {cuisines.join(",")}</Text>
                    <Text color='gray'>{area}</Text>
                </Box>
                <MenuList list={menuList[1].card.card}/>
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