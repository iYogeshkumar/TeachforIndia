import React from 'react'
import Navbar from '../Components/Navbar'
import { Button, Center } from '@chakra-ui/react'

const ListOfCandidates = () => {
  return (
    <div>
      <Navbar/>
      <Center bg='tomato' h='100px' color='white'>
  List of Volunteers who registered
</Center>
<Button colorScheme='blue'>Button</Button>
    </div>
  )
}

export default ListOfCandidates
