import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Center, Divider, Image, Text } from '@chakra-ui/react'
import * as Constants from '../constants/index'
import React from 'react'

const MenuList = (props) => {
    console.log(props.list.itemCards);

    const menuCards = props.list.itemCards.map((item)=>{
        const itemInfo = item.card.info;
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
                        <Button m='5px'>Add</Button>
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