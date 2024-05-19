import {
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Text,
  Heading,
  Box,
  Divider,
  Tag,
  Code,
} from "@chakra-ui/react";

import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

import CFG from "./CFG";
import PDA from "./PDA";
import SAMPLES from "./samples";
const LeftBox = ({
  handleTest,
  data,
  prob2,
  string,
  handleReset,
  handleTextChange,
  handleSimulation,
  simulating,
  count,
  regex1,
  regex2,
}) => {
  return (
    <>
      <Box
        w={["20em", "20em", "40em", "40em", "40em", "60em"]}
        mr={[0, 0, 0, 0, 0, 0]}
        mt={[14, 14, 16, 16, 16, 0]}
      >
        <Flex align="flex-end" justify="center">
          <Heading variant="title">Automaton Compiler</Heading>
        </Flex>

        <Divider mb="6" />

        <Box>
          <form onSubmit={handleTest}>
            {data &&
              data.map((result, index) => (
                <Box key={index}>
                  <Flex align="center">
                    <Heading>Input String {index + 1}:</Heading>
                    <Flex align="center">
                      <Button
                        variant="data"
                        rightIcon={
                          result.result === "Valid" ? (
                            <Box color="teal.300">
                              <FaCheck />
                            </Box>
                          ) : (
                            result.result === "Invalid" && (
                              <Box color="pink.300">
                                <ImCross />
                              </Box>
                            )
                          )
                        }
                      >
                        {result.result}
                      </Button>
                      <Button
                        variant="simulate"
                        isLoading={simulating}
                        loadingText="simulating..."
                        spinnerPlacement="start"
                        onClick={() => handleSimulation(index)}
                        ml={2}
                        disabled={simulating}
                      >
                        Simulate
                      </Button>
                    </Flex>
                  </Flex>
                  <Text>{result.input}</Text>
                </Box>
              ))}
            <InputGroup>
              <Input
                maxLength="100"
                fontSize={["0.7em", "0.7em", "0.9em"]}
                my={3}
                placeholder={!prob2 ? "e.g. abbbababb" : "e.g. 11010101"}
                value={string}
                onChange={handleTextChange}
              />
              <InputRightElement justifyContent="flex-end" pr={3} pt={6}>
                <Text
                  fontWeight="semibold"
                  fontSize={["0.7em", "0.7em", "0.9em"]}
                >
                  {count}/100
                </Text>
              </InputRightElement>
            </InputGroup>
            <Flex justify={{ base: "center", md: "space-between" }} align="center" flexDirection={{ base: "column", md: "row" }}>
              <Flex>
                <Button type="submit" variant="validate" disabled={simulating}>
                  Validate
                </Button>
                <Button variant="clear" onClick={handleReset} disabled={simulating} ml={2}>
                  Clear
                </Button>
              </Flex>
              <Flex mt={2} justifyContent={{ base: "center", md: "flex-end" }}>
                <CFG prob2={prob2} />
                <PDA prob2={prob2} />
                <SAMPLES prob2={prob2} />
              </Flex>
            </Flex>
            <Divider my="6" />
            {/* DIVIDER OF LEFT CONTAINER */}
            <Flex
              align="center"
              direction={["column", "column", "row", "row", "row", "none"]}
              display={["flex", "flex", "flex", "flex", "flex", "none"]}
            // justify="space-between"
            >
              <Heading>Regular Expression:</Heading>
              <Tag my={1} fontSize={["0.7em", "0.7em", "0.9em"]}>
                {!prob2 ? regex1 : regex2}
              </Tag>
            </Flex>
            <Flex
              my={2}
              direction={["column", "column", "row", "row", "row", "none"]}
              display={["flex", "flex", "flex", "flex", "flex", "none"]}
              align="center"
            >
              <Heading>Language Accepted:</Heading>
              <Tag my={1} fontSize={["0.7em", "0.7em", "0.9em"]}>
                {!prob2 ? "[a, b]" : "[0, 1]"}
              </Tag>
            </Flex>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default LeftBox;
