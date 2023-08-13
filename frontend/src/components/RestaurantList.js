import React from 'react'
import RestaurantCard from './RestaurantCard';
import { Link } from 'react-router-dom';

const RestaurantList = ({restaurantList}) => {
    console.log(restaurantList);
    // Create a list of RestaurantCards
    const renderListOfRestaurantCards = restaurantList.map((restaurant) => {
        return (
            <Link to='/card/2'>
                <RestaurantCard info={restaurant.info} />
            </Link>
        )
    })
  return (
    <>
    {renderListOfRestaurantCards}
    </>
  )
}

export default RestaurantList