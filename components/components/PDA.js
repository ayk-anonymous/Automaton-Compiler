import {
  Box,
  VStack,
  Text,
  Image,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  
} from "@chakra-ui/react";

const PDA = ({ prob2 }) => {
  return (
    <>
      <Popover isLazy placement="bottom">
        <PopoverTrigger>
          <Button mr="2">Show PDA</Button>
        </PopoverTrigger>
        <PopoverContent
          maxW={["17em", null, "16em", null, null, "18em"]}
          _focus=""
          bg="gray.50"
          fontSize={["0.7em", "0.7em", "0.9em"]}
        >
          <PopoverArrow bg="gray.800" />
          <PopoverCloseButton mt="2px" color="white" bg="gray.800" _hover={{ bg: "white", color: "gray.800" }} />
          <PopoverHeader fontWeight="semibold" color="black">
            Push Down Automata
          </PopoverHeader>
          <PopoverBody align="center" fontWeight="semibold" color="black">
          {!prob2? (
              <VStack>
                <Box
                  as="img"
                  src="/PDA1.png"
                  alt="PDA 2"
                  width="100%"
                  height="100%"
                  maxHeight="500px" // Constrain the maximum height
                  objectFit="contain" // Ensure the image scales properly
                />
              </VStack>
            ) : (
              <VStack>
                <Box
                  as="img"
                  src="/PDA2.png"
                  alt="PDA 1"
                  width="100%"
                  height="100%"
                  maxHeight="500px" // Constrain the maximum height
                  objectFit="contain" // Ensure the image scales properly
                />
              </VStack>
            )}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default PDA;
