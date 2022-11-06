import React from 'react'
import Navbar from '../Components/Navbar'
import { Button, Center, Table,Thead,Th,Tr,Td,TableContainer,Tbody } from '@chakra-ui/react'
import { useState } from 'react';

const ListOfCandidates = () => {

  const [volunteerdata, setVolunteerData] = useState([]);

  fetch("http://localhost:8080/listofcandidates")
    .then((res) => res.json())
    .then((volunteerdata) => setVolunteerData(volunteerdata));


  return (
    <div>
      <Navbar/>
      <Center bg='tomato' h='100px' color='white'>
  List of Volunteers who registered
</Center>
<Button colorScheme='blue'>Button</Button>


<TableContainer>
  <Table variant='striped' colorScheme='teal'>
    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Email</Th>
        <Th>Phone Number</Th>
        <Th>Location</Th>
        <Th>Spoken Languages</Th>
        <Th>Availability(days)</Th>

      </Tr>
    </Thead>

    <Tbody>
    {volunteerdata.map((e)=>{
      
     return <Tr>
        <Td>{e.name}</Td>
        <Td>{e.email}</Td>
        <Td>{e.phone}</Td>
        <Td>{e.location}</Td>
        <Td>{e.spokenLanguages}</Td>
        <Td>{e.availability}</Td>

      </Tr>
      })}
    </Tbody>
  </Table>
</TableContainer>




    </div>
  )
}

export default ListOfCandidates
