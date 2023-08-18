import { Box, Center, Image, Input, Text } from '@chakra-ui/react'
import * as Constants from '../constants/index'
import React, { useEffect, useState } from 'react'

const SearchComp = () => {

  const [value, setValue] = useState('');
  const [searchResults, setSearchResults] = useState('');
  const [preSearchResults, setPreSearchResults] = useState('');

  const handleSearchInputChange = (event) => {
    setValue(event.target.value);
  }

  // fetch the Popular Cuisines data, from Pre-SEARCH api
  useEffect(()=> {
    const fetchPreSearchInfo = async () => {
        const response = await fetch(Constants.PRE_SEARCH_API)
        const data = await response.json();
        //console.log(data);
        if(data.statusCode == 0)  {
            console.log(data)
            setPreSearchResults(data.data.cards[1].card.card); // This is an object
        } else setSearchResults([]);

    }
    fetchPreSearchInfo();
  },[])

  // Once the value is set, we should then call the webservice API 
  useEffect(()=> {
    const fetchSearchInfo = async () => {

        const response = await fetch(Constants.RESTAURANT_SEARCH_AUTOCOMPLETE+value)
        const data = await response.json();
        //console.log(data);
        if(data.statusCode == 0)  {
            console.log(data)
            setSearchResults(data.data.suggestions);
        } else setSearchResults([]);

    }
    fetchSearchInfo();
  },[value])


  // Code to create a list of all the search results
  // Show them as a list
  let searchResultList;
  if(searchResults) {   
    searchResultList = searchResults.map((el)=>{
        return (
            <Box mt='15px' background='#f3f3f4' width='400px'>
                <Text>{el.text}</Text>
                <Text color='gray' >{el.type}</Text>
            </Box>
        )
    })
  }

  // Code to create a list of all Popular Cuisines from Pre-Search API results
  // Show them on the page if nothing is being searched by the user
  let preSearchResultsList;
  if(preSearchResults) { 
    // List of all popular cuisines  
    const popularCuisineList = preSearchResults.gridElements.infoWithStyle.info;
    preSearchResultsList = popularCuisineList.map((el)=>{
        const imgURL = (Constants.CLOUDINARY_IMAGE + el.imageId);
        const itemName = el.entityId.substring(23);
        return (
            <Box mt='15px' background='#f3f3f4'>                
                <Image src={imgURL}/>
            </Box>
        )
    })
  }

  return (
    <>
        <Center>
            <Input
                value={value}
                onChange={handleSearchInputChange}
                placeholder='Search for restaurants and food'
                size='sm'
                maxWidth='400px'
                mt='20px'
            />
            
        </Center>
        {
            (searchResultList?.length) 
            ? 
            <Center flexDirection='column'>
                {searchResultList}
            </Center>
            :
            (preSearchResultsList?.length)
            ? 
            <Center flexDirection='column'>                
                <Text fontWeight='bold' fontSize='2xl' mt='50px'>Popular Cuisines</Text>                
                <Center>
                    {preSearchResultsList}
                </Center>
            </Center>
            :
            <> </>
        }
    
    </>
  )
}

export default SearchComp
