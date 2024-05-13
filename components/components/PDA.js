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

const PDA = ({ prob2 }) => {
  return (
    <>
      <Popover isLazy placement="bottom">
        <PopoverTrigger>
          <Button mr="2">Show PDA</Button>
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
            Push Down Automata
          </PopoverHeader>
          <PopoverBody align="center" fontWeight="semibold" color="black">
            {!prob2 ? (
              <VStack>
                <Text border="solid green" borderRadius="25px" padding="5px" fontWeight="extrabold">{"start"}</Text>
                <Text>{<span>&#8659;</span>}</Text>
                <div style={{
                  position: 'relative',
                  display: 'inline-block'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    border: 'solid green',
                    borderRadius: '5px',
                    transform: 'rotate(45deg)'
                  }}></div>
                  <Text padding="5px 8px 8px 8px" fontWeight="extrabold">{"R1"}</Text>
                </div>
                <Text>{<span>a &nbsp;&nbsp;&nbsp;&nbsp;&#8665;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8664;&nbsp;&nbsp;&nbsp;&nbsp; b</span>}</Text>
                <Text>
                  <div style={{
                    position: 'relative',
                    display: 'inline-block'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      border: 'solid green',
                      borderRadius: '5px',
                      transform: 'rotate(45deg)'
                    }}></div>
                    <Text padding="5px 8px 8px 8px" fontWeight="extrabold">{"R2"}</Text>
                  </div>                  <span>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <div style={{
                    position: 'relative',
                    display: 'inline-block'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      border: 'solid green',
                      borderRadius: '5px',
                      transform: 'rotate(45deg)'
                    }}></div>
                    <Text padding="5px 8px 8px 8px" fontWeight="extrabold">{"R3"}</Text>
                  </div>
                </Text>
                <Text>{<span>a &nbsp;&nbsp;&nbsp;&nbsp;&#8664;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;&nbsp;&nbsp;&nbsp;&nbsp; b</span>}</Text>
                <div style={{
                  position: 'relative',
                  display: 'inline-block'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    border: 'solid green',
                    borderRadius: '5px',
                    transform: 'rotate(45deg)'
                  }}></div>
                  <Text padding="5px 8px 8px 8px" fontWeight="extrabold">{"R4"}</Text>
                </div>
                <Text>{<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8659;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a,b</span>}</Text>
                <div style={{
                  position: 'relative',
                  display: 'inline-block'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    border: 'solid green',
                    borderRadius: '5px',
                    transform: 'rotate(45deg)'
                  }}></div>
                  <Text padding="5px 8px 8px 8px" fontWeight="extrabold">{"R5"}</Text>
                </div>
                <Text>{<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8659;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a,b</span>}</Text>
                <Text border="solid green" borderRadius="25px" padding="5px" fontWeight="extrabold">{"accept"}</Text>
              </VStack>
            ) : (
              <VStack>
                <Text border="solid green" borderRadius="25px" padding="5px" fontWeight="extrabold">{"start"}</Text>
                <Text>{<span>&#8659;</span>}</Text>
                <div style={{
                  position: 'relative',
                  display: 'inline-block'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    border: 'solid green',
                    borderRadius: '5px',
                    transform: 'rotate(45deg)'
                  }}></div>
                  <Text padding="5px 8px 8px 8px" fontWeight="extrabold">{"R1"}</Text>
                </div>
                <Text>{<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0&#8665;&nbsp;&nbsp;&nbsp;&nbsp;1&#8659;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>}</Text>
                <Text>
                <div style={{
                    position: 'relative',
                    display: 'inline-block'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      border: 'solid green',
                      borderRadius: '5px',
                      transform: 'rotate(45deg)'
                    }}></div>
                    <Text padding="5px 8px 8px 8px" fontWeight="extrabold">{"R2"}</Text>
                  </div>
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <div style={{
                    position: 'relative',
                    display: 'inline-block'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      border: 'solid green',
                      borderRadius: '5px',
                      transform: 'rotate(45deg)'
                    }}></div>
                    <Text textAlign="right" padding="5px 8px 8px 8px" fontWeight="extrabold">{"R3"}</Text>
                  </div>
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <div style={{
                    position: 'relative',
                    display: 'inline-block'
                  }}>
                    <Text padding="5px 8px 8px 8px" fontWeight="extrabold">{""}</Text>
                  </div>
                </Text>
                <Text>{<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0&#8659;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1&#8663;&nbsp;&nbsp;&nbsp;&nbsp;0&#8659;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1&#8664;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>}</Text>
                <Text>
                <div style={{
                    position: 'relative',
                    display: 'inline-block'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      border: 'solid green',
                      borderRadius: '5px',
                      transform: 'rotate(45deg)'
                    }}></div>
                    <Text padding="5px 8px 8px 8px" fontWeight="extrabold">{"R4"}</Text>
                  </div>
                  <span>&nbsp;&nbsp;&nbsp;&#8656;&nbsp;&nbsp;&nbsp;</span>
                  <div style={{
                    position: 'relative',
                    display: 'inline-block'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      border: 'solid green',
                      borderRadius: '5px',
                      transform: 'rotate(45deg)'
                    }}></div>
                    <Text textAlign="right" padding="5px 8px 8px 8px" fontWeight="extrabold">{"R5"}</Text>
                  </div>
                  <span>&nbsp;&nbsp;&nbsp;&#8656;&nbsp;&nbsp;&nbsp;</span>
                  <div style={{
                    position: 'relative',
                    display: 'inline-block'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      border: 'solid green',
                      borderRadius: '5px',
                      transform: 'rotate(45deg)'
                    }}></div>
                    <Text padding="5px 8px 8px 8px" fontWeight="extrabold">{"R6"}</Text>
                  </div>
                </Text>
                <Text>{<span>0&#8664;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1&#8659;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1&#8665;</span>}</Text>
                <Text border="solid green" borderRadius="25px" padding="5px" fontWeight="extrabold">{"accept"}</Text>
              </VStack>
            )}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default PDA;
