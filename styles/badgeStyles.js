export const Badge = {
  baseStyle: {
    _focus: "",
  },
  sizes: {
    node: {
      bg: "green.900",
      color: ["gray.200", null, "gray.200"],

      // h: ["2em", "2em", "3.5em", "3.5em"],
      h: "3.5em",
      w: "3.5em",
      // w: ["2em", "2em", "3.5em", "3.5em"],

      boxShadow: "xl",
      border: "2px",
      rounded: "50%",

      pos: "absolute",
      transform: "auto",
      translateX: "-50%",
      translateY: "-50%",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      textTransform: "none",
      fontSize: ["0.6em", "0.6em", "1em", "1em", "1em", "1.1em"],
      fontWeight: "500",
    },
  },
  variants: {
    q1: {
      top: "50%",
      left: "10%",

      borderColor: "yellow.600",
    },
    q2: {
      top: "20%",
      left: "30%",

      borderColor: "yellow.600",
    },
    q3: {
      top: "80%",
      left: "30%",
      borderColor: "yellow.600",
    },
    q4: {
      top: "50%",
      left: "50%",

      borderColor: "yellow.600",
    },
    q5: {
      top: "50%",
      left: "68%",

      borderColor: "yellow.600",
    },
    q6: {
      top: "50%",
      left: "86%",
      borderColor: "yellow.600",
    },

    T: {
      top: "50%",
      left: "30%",
      borderColor: "yellow.600",
    },
    1: {
      top: "15%",
      left: "50%",
      borderColor: "yellow.600",
    },
    2: {
      top: "50%",
      left: "50%",
      borderColor: "yellow.600",
    },
    3: {
      top: "85%",
      left: "50%",
      borderColor: "yellow.600",
    },
    4: {
      top: "50%",
      left: "30%",
      borderColor: "yellow.600",
    },
    5: {
      top: "50%",
      left: "70%",
      borderColor: "yellow.600",
    },
    6: {
      top: "85%",
      left: "30%",
      borderColor: "yellow.600",
    },
    7: {
      top: "50%",
      left: "10%",
      borderColor: "yellow.600",
    },
    8: {
      top: "50%",
      left: "10%",
      borderColor: "yellow.600",
    },
  },
  defaultProps: {
    size: "node",
  },
};
