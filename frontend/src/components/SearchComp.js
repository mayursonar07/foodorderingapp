import { Box, Center, Input, Text } from '@chakra-ui/react'
import * as Constants from '../constants/index'
import React, { useEffect, useState } from 'react'

const SearchComp = () => {

  const [value, setValue] = useState('');
  const [searchResults, setSearchResults] = useState('');

  const handleSearchInputChange = (event) => {
    setValue(event.target.value);
  }

  // Once the value is set, we should then call the webservice API 
  useEffect(()=> {
    const fetchSearchInfo = async () => {

        const response = await fetch(Constants.RESTAURANT_SEARCH_AUTOCOMPLETE+value)
        const data = await response.json();
        //console.log(data);
        if(data.statusCode == 0)  {
            console.log(data)
            setSearchResults(data.data.suggestions);
        }

    }
    fetchSearchInfo();
  },[value])

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
        searchResultList 
        ? 
        <Center flexDirection='column'>
            {searchResultList}
        </Center>
        :
        <></>
        
    }
    
    </>
  )
}

export default SearchComp
