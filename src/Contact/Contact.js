import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Center,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function ContactComponent() {
  return (
    <Box w='100%'>
      <Center>
        <Card m='5' align='center' w='40%'>
          <CardBody>
            <Text fontSize='2xl'>Feel Free to contact me!</Text>
            <Box m={3}>
              <Text>
                Email :{" "}
                <span style={{ fontWeight: "bold" }}>
                  arjunmallik093@gmail.com
                </span>
              </Text>
            </Box>
          </CardBody>
          <CardFooter>
            <Button colorScheme='blue'>
              <Link href='#'>View my Resume</Link>
            </Button>
          </CardFooter>
        </Card>
      </Center>
    </Box>
  );
}
