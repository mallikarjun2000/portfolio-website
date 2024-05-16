import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaAngular, FaGithub, FaLinkedin, FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { MdCss } from "react-icons/md";
import { SiTypescript } from "react-icons/si";
import { TbBrandLeetcode } from "react-icons/tb";
import { TiHtml5 } from "react-icons/ti";

export default function AboutComponent() {
  return (
    <Stack>
      <Center>
        <Text fontSize='2rem' fontFamily='sans-serif' letterSpacing='4px' m='2'>
          ABOUT
        </Text>
      </Center>
      <Box>
        <Text fontSize={"xl"} m={"4"} align='center'>
          "Front-End Developer with over 3.4 years of experience building
          user-facing web applications. Proficient in Angular and possess a
          strong working knowledge of HTML, CSS, JavaScript, and TypeScript. I
          am passionate about crafting innovative and effective front-end
          solutions that address real-world challenges."
        </Text>
      </Box>
      <Box>
        <Center>
          <Text
            fontSize='2rem'
            fontFamily='sans-serif'
            letterSpacing='4px'
            m='2'
          >
            Skills
          </Text>
        </Center>
        <Grid
          templateColumns='repeat(4, 1fr)'
          templateRows='repeat(2, 1fr)'
          alignItems='center'
        >
          <Center>
            <TiHtml5 size='5em' style={{ margin: "5px" }} color='grey' />
          </Center>
          <Center>
            <MdCss size='5em' style={{ margin: "5px" }} color='blue' />
          </Center>
          <Center>
            <IoLogoJavascript
              size='5em'
              style={{ margin: "5px" }}
              color='yellow'
            />
          </Center>
          <Center>
            <SiTypescript size='5em' style={{ margin: "5px" }} color='blue' />
          </Center>
          <GridItem colStart={2} colEnd={3}>
            <Center>
              <FaAngular size='5em' style={{ margin: "5px" }} color='red' />
            </Center>
          </GridItem>
          <GridItem colStart={3} colEnd={4}>
            <Center>
              <FaReact size='5em' style={{ margin: "5px" }} color='skyblue' />
            </Center>
          </GridItem>
        </Grid>
      </Box>
      <Box>
        <Stack>
          <Center>
            <Text
              fontSize='2rem'
              fontFamily='sans-serif'
              letterSpacing='4px'
              m='2'
            >
              Additional Link
            </Text>
          </Center>
          <Flex
            direction='row'
            alignItems='center'
            justifyContent='space-around'
          >
            <Link href='https://github.com/mallikarjun2000'>
              <FaGithub size='4em' style={{ margin: "5px" }} color='black' />
              <Text>github</Text>
            </Link>
            <Link href='https://leetcode.com/u/arjunmallik093/'>
              <TbBrandLeetcode
                size='4em'
                style={{ margin: "5px" }}
                color='gold'
              />
              <Text>Leetcode</Text>
            </Link>
            <Link href='https://www.linkedin.com/in/mallikarjun-komarraju-b4b070183/'>
              <FaLinkedin size='4em' style={{ margin: "5px" }} color='blue' />
              <Text>LinkedIn</Text>
            </Link>
          </Flex>
        </Stack>
      </Box>
    </Stack>
  );
}
