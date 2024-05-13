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

import { TextWithCopy } from "./TextWithCopy";

const SAMPLES = ({ prob2 }) => {
  return (
    <>
      <Popover isLazy placement="bottom">
        <PopoverTrigger>
          <Button>Strings</Button>
        </PopoverTrigger>
        <PopoverContent
          maxW={["17em", null, "16em", null, null, "16em"]}
          _focus=""
          bg="gray.50"
          fontSize={["0.7em", "0.7em", "0.9em"]}
        >
          <PopoverArrow bg="gray.800" />
          <PopoverCloseButton mt="2px" color="white" bg="gray.800" _hover={{ bg: "white", color: "gray.800" }} />
          <PopoverHeader fontWeight="semibold" color="black">
            Click to copy text
          </PopoverHeader>
          <PopoverBody align="center" fontWeight="semibold" color="black">
            {!prob2 ? (
              <VStack>
                  <TextWithCopy>{'aabababa'}</TextWithCopy>
                  <TextWithCopy>{'bbaabbba'}</TextWithCopy>
                  <TextWithCopy>{'aabaabab'}</TextWithCopy>
                  <TextWithCopy>{'bbabbaba'}</TextWithCopy>
              </VStack>
            ) : (
              <VStack>
                <Text>
                  <TextWithCopy>{'10101100'}</TextWithCopy>
                  <TextWithCopy>{'01101100'}</TextWithCopy>
                  <TextWithCopy>{'11100101'}</TextWithCopy>
                  <TextWithCopy>{'00110101'}</TextWithCopy>
                </Text>
              </VStack>
            )}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default SAMPLES;
