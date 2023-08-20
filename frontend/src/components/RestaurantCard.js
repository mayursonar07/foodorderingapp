import React from 'react'
import * as Constants from '../constants/index'
import { Link } from 'react-router-dom';
import { Box, Center, Image, Text, WrapItem } from '@chakra-ui/react';

const RestaurantCard = ({info}) => {
    const imgURL = (Constants.CLOUDINARY_IMAGE + info.cloudinaryImageId);
    const cuisines = info.cuisines;
    const area = info.areaName;
  return (
    <>
    <Center>

        <Link to={`/card/${info.id}`} state={info}>
            <Image borderRadius='15px' src={imgURL}/>
            <Text fontSize='16' fontWeight='bold' ml='15px' mt='5px'>{info.name}</Text>
            <Text fontSize='13' fontWeight='bold' ml='15px'>✰ {info.avgRating}</Text>
            <Text width='200px' fontSize='13' ml='15px' color='gray'>{cuisines.join(",")}</Text>
            <Text fontWeight='bold' fontSize='13' ml='15px' color='gray'>{area}</Text>
            
        </Link>
    </Center>

    </>
  )
}

export default RestaurantCard

