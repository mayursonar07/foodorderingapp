import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Center, Divider, Image, Text } from '@chakra-ui/react'
import * as Constants from '../constants/index'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../slices/cartSlice'

const MenuList = (props) => {
    // dispatch for reducer functions
    const dispatch = useDispatch();
    // To use the states from slice
    const cartItems = useSelector(state => state.cart.cartItems);

    console.log(props.list.itemCards);
    const menuCards = props.list.itemCards.map((item)=>{

        const itemInfo = item.card.info;
        itemInfo.restaurantId =  props.restaurantId;

        const cartItem = cartItems.find(cartItem => cartItem.id === itemInfo.id);
        const cartQuantity = cartItem ? cartItem.cartQuantity : 0;

        const imgURL = (Constants.CLOUDINARY_IMAGE + itemInfo.imageId);
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
                        <Image src={imgURL} width='100px' m='5px'/>
                        {
                            cartQuantity > 0
                            ?
                            (
                                <Box display='flex'>
                                    <Button width='0px' m='5px' onClick={()=>{dispatch(removeItem(itemInfo))}}>-</Button>
                                    <Text mt='15px'>{cartQuantity}</Text>
                                    <Button width='0px' m='5px' onClick={()=>{dispatch(addItem(itemInfo))}}>+</Button>
                                </Box>
                            )
                            :
                            (
                                <Button m='5px' onClick={()=>{dispatch(addItem(itemInfo))}}>Add</Button>
                            )
                        }
                        
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
        <Accordion defaultIndex={[0]} allowMultiple width='75%'>
            <AccordionItem>
                <AccordionButton >
                    <Box as="span" flex='1' textAlign='left' color='black' fontSize='2xl' fontWeight='bold' >
                         Menu Items
                    </Box>
                    <AccordionIcon color='black'/>
                </AccordionButton>
                <AccordionPanel>
                    {menuCards}
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    </Center>
    </>
  )
}

export default MenuList