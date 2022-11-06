import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import {
  Button,
  Center,
  Table,
  Thead,
  Th,
  Tr,
  Td,
  TableContainer,
  Tbody,
} from "@chakra-ui/react";
import { useState } from "react";

const ListOfCandidates = () => {
  const [volunteerdata, setVolunteerData] = useState([]);
  const [clsdata, setclsdata] = useState([]);

  {
    /*class fetching*/
  }
  async function getData() {
    try {
      let res = await fetch("http://localhost:5400/classroom");
      let data = await res.json();
      // console.log("data:",data);
      setclsdata(data);
      // console.log("clsdata",clsdata);
    } catch (err) {
      console.log("err", err);
    }
    console.log("clsdata", clsdata);
  }
  // useEffect(()=>{
  // getData()
  // })
  fetch("https://teachforindiavolun.herokuapp.com/listofcandidates")
    .then((res) => res.json())
    .then((volunteerdata) => setVolunteerData(volunteerdata));

  return (
    <div>
      <Center bg="teal" h="100px" color="white" fontSize="30px">
        List of Volunteers who registered
      </Center>

      <TableContainer>
        <Table variant="striped" colorScheme="teal">
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
            {volunteerdata.map((e) => {
              return (
                <Tr key={e.id}>
                  <Td>{e.name}</Td>
                  <Td>{e.email}</Td>
                  <Td>{e.phone}</Td>
                  <Td>{e.location}</Td>
                  <Td>{e.spokenLanguages}</Td>
                  <Td>{e.availability}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ListOfCandidates;
