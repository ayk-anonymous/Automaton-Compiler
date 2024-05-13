import {
  Box,
  VStack,
  Text,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";

const CFG = ({ prob2 }) => {
  return (
    <>
      <Popover isLazy placement="bottom">
        <PopoverTrigger>
          <Button mx="2">Show CFG</Button>
        </PopoverTrigger>
        <PopoverContent
          maxW={["17em", null, "16em", null, null, "16em"]}
          _focus=""
          bg="gray.50"
          fontSize={["0.7em", "0.7em", "0.9em"]}
        >
          <PopoverArrow bg="gray.800" />
          <PopoverCloseButton mt="2px" color="white" bg="gray.800" _hover={{ bg:"white", color: "gray.800" }} />
          <PopoverHeader fontWeight="semibold" color="black">
            Context-free Grammar
          </PopoverHeader>
          <PopoverBody align="center" fontWeight="semibold" color="black">
            {!prob2 ? (
              <VStack>
                <Text>{"S -> aaA | bbA"}</Text>
                <Text>{"A -> aB | bB | B"}</Text>
                <Text>{"B -> aC | bC | abC | baC"}</Text>
                <Text>{"C -> aD | bD | abD | baD | D"}</Text>
                <Text>{"D -> aaE | babE | E"}</Text>
                <Text>{"E -> aF | bF | aaF"}</Text>
                <Text>{"F -> aF | bF | bbF | aaF| ^"}</Text>
              </VStack>
            ) : (
              <VStack>
                <Text>{"S -> A"}</Text>
                <Text>{"A -> 101B | 111AB | 100B | 1AB | 0AB | 11AB | ^"}</Text>
                <Text>{"B -> 1BC | 0BC | 01BC | ^"}</Text>
                <Text>{"C -> 111D | 000D | 101D"}</Text>
                <Text>{"D -> 1D | 0D | ^"}</Text>
              </VStack>
            )}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default CFG;
