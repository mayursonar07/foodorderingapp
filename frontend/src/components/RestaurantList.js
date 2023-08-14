import React, {useState} from 'react'
import RestaurantCard from './RestaurantCard';
import { Link } from 'react-router-dom';

const RestaurantList = ({restaurantList}) => {
    console.log(restaurantList);
    // Create a list of RestaurantCards
    const renderListOfRestaurantCards = restaurantList.map((restaurant) => {
        return (
            
                <RestaurantCard key={restaurant.info.id} info={restaurant.info} />
            
        )
    })
  return (
    <>
    {renderListOfRestaurantCards}
    </>
  )
}

export default RestaurantList