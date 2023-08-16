import React from 'react'
import * as Constants from '../constants/index'
import { Link } from 'react-router-dom';
import { Box, Center, Image, WrapItem } from '@chakra-ui/react';

const RestaurantCard = ({info}) => {
    const imgURL = (Constants.CLOUDINARY_IMAGE + info.cloudinaryImageId);
  return (
    <>
    <Center>

        <Link to={`/card/${info.id}`} state={info}>
            <Image mb src={imgURL}/>
            {<b>{info.name}</b>}

        </Link>
    </Center>

    </>
  )
}

export default RestaurantCard

