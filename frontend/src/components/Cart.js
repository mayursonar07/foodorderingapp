import { Box, Center, Divider, Text } from '@chakra-ui/react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {
    // Get all the info of items from the cartSlice
       // dispatch for reducer functions
    const dispatch = useDispatch();
    // To use the states from slice
    const cartItems = useSelector(state => state.cart.cartItems);

    const menuCards = cartItems.map((itemInfo)=>{

        //const imgURL = (Constants.CLOUDINARY_IMAGE + itemInfo.imageId);
        return(
            <>
            <Box mt='15px'>
                <Box display='flex'>
                    <Box width='80%' color='gray.600'>
                        <Text fontWeight='bold'>{itemInfo.name}</Text>
                        <Text fontSize='sm'>₹ {itemInfo.defaultPrice ? itemInfo.defaultPrice/100 : itemInfo.price ? itemInfo.price/100 : '-'}</Text>            
                        <Text fontSize='xs' color='gray'>{itemInfo.description } </Text>
                    </Box>
                    <Box>
                        {/* <Image src={imgURL} width='100px' m='5px'/> */}
                        <Text mt='15px'>{itemInfo.cartQuantity}</Text>                        
                    </Box>
                </Box>
                <Divider/>
            </Box>
            </>
        )
    })


  return (
    <>
    <Center>
        <Text fontSize='3xl' fontWeight='bold' mt='25px'>Order Summary</Text>
    </Center>
    {
        (menuCards.length)
        ?
        menuCards
        :
        <Center mt='30px'>
            <Text>Cart is empty</Text>
        </Center>
    
    }
    </>
  )
}

export default Cart
