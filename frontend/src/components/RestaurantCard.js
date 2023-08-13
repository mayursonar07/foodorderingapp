import React from 'react'
import * as Constants from '../constants/index'

const RestaurantCard = ({info}) => {
    const imgURL = (Constants.CLOUDINARY_IMAGE + info.cloudinaryImageId);
  return (
    <>
    <div>
    <img src={imgURL}/>
    {info.name}
    </div>
    </>
  )
}

export default RestaurantCard

