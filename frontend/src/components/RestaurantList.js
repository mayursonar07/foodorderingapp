import React, {useState} from 'react'
import RestaurantCard from './RestaurantCard';
import { Link } from 'react-router-dom';
import { Box, Wrap, WrapItem } from '@chakra-ui/react';

const RestaurantList = ({restaurantList}) => {
    console.log(restaurantList);
    // Create a list of RestaurantCards
    const renderListOfRestaurantCards = restaurantList.map((restaurant) => {
        return (
          <Box border='1px' borderColor='white' borderRadius='15px' p='10px' mt='25px' boxShadow='10px 10px 20px 0px #f3f3f4'>

            <WrapItem  m='20px' _hover={{cursor: 'pointer', transform: 'scale(0.9)', transition: 'all 0.5s ease'}}>
                <RestaurantCard key={restaurant.info.id} info={restaurant.info} />
            </WrapItem>
          </Box>
            
        )
    })
  return (
    <>
    {renderListOfRestaurantCards}
    </>
  )
}

export default RestaurantList