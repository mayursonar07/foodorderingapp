import React from 'react'
import * as Constants from '../constants/index'
import { Link } from 'react-router-dom';

const RestaurantCard = ({info}) => {
    const imgURL = (Constants.CLOUDINARY_IMAGE + info.cloudinaryImageId);
  return (
    <>
    <Link to={`/card/${info.id}`} state={info}>
        <div>
        <img src={imgURL}/>
        {info.name}
        </div>
    </Link>
    </>
  )
}

export default RestaurantCard

