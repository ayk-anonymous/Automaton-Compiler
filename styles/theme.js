import { extendTheme } from "@chakra-ui/react";
import { Button, Heading, Tag, Flex, Input, Text } from "./overrides";
import { Badge } from "./badgeStyles";
export const theme = extendTheme({
  fonts: {
    body: 'Montserrat', 
    heading: 'Montserrat', 
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "blue.900" : "gray.50",
      },
      p: {
        color: "white.300",
      },
      "h1, h2, h3, h4": {
        color: "white.300",
      },
    }),
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
  textStyles: {
    Primary: {
      color: "white.300",
    },
  },
  layerStyles: {
    Primary: {
      bgColor: "white.300",
    },
  },
  components: {
    Button,
    Badge,
    Heading,
    Tag,
    Flex,
    Input,
    Text,
  },
});
