import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const routes = ["about", "work", "blog", "projects", "contacts"];

function NavItem(props) {
  let item;
  if (props.label === "Blog") {
    item = (
      <a
        href='https://mallikarjun.hashnode.dev/'
        target='_blank'
        rel='no-reference noreferrer'
      >
        <Text
          _hover={{
            opacity: "0.9",
            border: "1px solid white",
          }}
          cursor='pointer'
          padding={2}
          color='white'
          m='2'
        >
          {props.label}
        </Text>
      </a>
    );
  } else if (props.label === "Projects") {
    item = (
      <a
        href='https://mallikarjun2000.github.io/projects.html'
        target='_blank'
        rel='no-reference noreferrer'
      >
        <Text
          _hover={{
            opacity: "0.9",
            border: "1px solid white",
          }}
          cursor='pointer'
          padding={2}
          color='white'
          m='2'
        >
          {props.label}
        </Text>
      </a>
    );
  } else {
    item = (
      <Link to={`/${routes[props.routeIndex]}`}>
        <Text
          _hover={{
            opacity: "0.9",
            border: "1px solid white",
          }}
          cursor='pointer'
          padding={2}
          color='white'
          m='2'
        >
          {props.label}
        </Text>
      </Link>
    );
  }
  return item;
}

export default function NavComponent() {
  const navItems = ["About", "Work", "Blog", "Projects", "Contact"];

  function renderNavItems() {
    return navItems.map((item, index) => (
      <NavItem key={index} label={item} routeIndex={index}></NavItem>
    ));
  }

  function renderNavInResponseive() {
    const navItems = renderNavItems();
    return <Flex direction={"column"}>{navItems}</Flex>;
  }

  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
  return (
    <>
      <Box className='nav' bg='black' w='100%' p={4}>
        <Flex justifyContent='space-between'>
          <Text color='white' p={2} fontSize='xl'>
            <Link to='/'>Mallikarjun.online</Link>
          </Text>
          <Flex justifyContent='space-evenly' w='50%'>
            {isLargerThan600 ? renderNavItems() : renderNavInResponseive()}
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
