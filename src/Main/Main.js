import { Box, Center, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutComponent from "../About/About";
import ContactComponent from "../Contact/Contact";
import WorkComponent from "../Work/Work";
import landingImage from "../assets/landing_image.svg";

function HomeComponent() {
  return (
    <Stack>
      <Flex
        w={"100%"}
        direction='row'
        align='center'
        justifyContent='center'
        wrap='wrap'
      >
        <Box fontFamily='monospace' fontSize={"2rem"} m={5}>
          <Text>Hello 👋</Text>
          <Text>I am Mallikarjun Komarraju </Text>
        </Box>
        <Box m={5}>
          <img
            width='200px'
            height='200px'
            alt='developer_img'
            src={landingImage}
          />
        </Box>
      </Flex>
      <Text fontSize='xl' wordBreak='break-word' m={8} align='center'>
        Enthusiastic Front-End Developer with a passion for the ever-evolving
        web development landscape. Eager to learn new technologies and
        contribute to a company at the forefront of building engaging user
        experiences.
      </Text>
    </Stack>
  );
}

export default function MainComponent() {
  return (
    <Box h={"90vh"}>
      <Center>
        <Routes>
          <Route path='*' Component={HomeComponent}></Route>
          <Route path='about' Component={AboutComponent}></Route>
          <Route path='work' Component={WorkComponent}></Route>
          <Route path='contacts' Component={ContactComponent}></Route>
        </Routes>
      </Center>
    </Box>
  );
}
