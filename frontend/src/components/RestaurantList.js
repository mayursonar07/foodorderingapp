import React from 'react'
import RestaurantCard from './RestaurantCard';

const RestaurantList = ({restaurantList}) => {
    console.log(restaurantList);
    // Create a list of RestaurantCards
    const renderListOfRestaurantCards = restaurantList.map((restaurant) => {
        return <RestaurantCard info={restaurant.info} />
    })
  return (
    <>
    {renderListOfRestaurantCards}
    </>
  )
}

export default RestaurantList