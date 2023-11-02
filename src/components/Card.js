import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";


const Card = ({ key, title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack spacing={10}>
      <Box 
        backgroundColor='white' 
        border='rounded' 
        borderRadius={10}
      >
        <Image border='rounded' borderRadius={10} src={imageSrc} />
        <Heading size='md' color='black' margin={2}>
          {title}
        </Heading>
        <Text color='#3C413E' margin={2}>
          {description}
        </Text>

        <HStack margin={2}>
          <Heading color='black' size='xs'>
            See more 
          </Heading>
          <FontAwesomeIcon icon={faArrowRight} size="1x" color="black"/>
        </HStack>
      </Box>
    </VStack>
  );
};

export default Card;
