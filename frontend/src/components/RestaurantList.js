import React, {useState} from 'react'
import RestaurantCard from './RestaurantCard';
import { Link } from 'react-router-dom';
import { Box, Wrap, WrapItem } from '@chakra-ui/react';

const RestaurantList = ({restaurantList}) => {
    console.log(restaurantList);
    // Create a list of RestaurantCards
    const renderListOfRestaurantCards = restaurantList.map((restaurant) => {
        return (
            <WrapItem m='20px'>
                <RestaurantCard key={restaurant.info.id} info={restaurant.info} />
            </WrapItem>
            
        )
    })
  return (
    <>
    {renderListOfRestaurantCards}
    </>
  )
}

export default RestaurantList