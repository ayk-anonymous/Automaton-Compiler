import { Badge, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  ArrowHead,
  ArrowLoopSm,
  ArrowLoopLg,
  ArrowBody,
} from "../components/Arrows";

const Atom = motion(Badge);

const variants = {
  initial: { y: "-50%", x: "-50%" },
  pulse: {
    scale: [1, 2.5, 1],
    transition: { duration: 0.6 },
  },
  bounce: {
    y: ["-50%", "-200%", "-50%"],
    x: ["-50%", "-50%", "-50%"],
    scale: 2.5,
    transition: { duration: 0.4 },
  },
  scale: { scale: 1.5 },
};

const FirstDFA = ({ currentNode, simulating }) => {
  return (
    <>
      {/* LETTERS */}
      {/* q2 q3 */}
      <Text size="label" top="15%" left="30%">
        b
      </Text>
      {/* q1 q2 */}
      <Text top="28%" left="20%" size="label">
        a
      </Text>
      {/* q2 t */}
      <Text top="34.2%" left="32%" size="label">
        b
      </Text>
      {/* q3 t */}
      <Text top="65%" left="32%" size="label">
        a
      </Text>
      {/* Trap */}
      <Text left={["42.3%", "42.3%", "38.8%", "38.8%", "38.8%", "37.2%"]}
        top={["48.7%", "48.7%", "48.7%", "48.7%", "48.7%", "48%"]}
        size="label">
        a,b
      </Text>
      {/* q1 q3 */}
      <Text top="73%" left="20%" size="label">
        b
      </Text>
      {/* q3 q4 */}
      <Text top="71%" left="40%" size="label">
        b
      </Text>
      {/* q2 q4 */}
      <Text top="28%" left="40%" size="label">
        a
      </Text>
      {/* q4 q5 */}
      <Text top="45%" left="77%" size="label">
        a,b
      </Text>
      {/* q5 q6 */}
      <Text top="45%" left="59%" size="label">
        a,b
      </Text>

      {/* q6 loop */}
      <Text left={["98.3%", "98.3%", "95%", null, null, "93.5%"]}
        top={["50.4%", "50.4%", "48.7%", "48.7%", "48.7%", "48%"]}
        size="label">
        a,b
      </Text>

      {/* ARROW BODY */}
      {/* q4 q6 */}
      <ArrowBody
        w={["3em", "3em", "8em", "8em", "8em", "11em"]}
        top={["58%", "58%", "55%", "55%", "55%", "55%"]}
        left="80%"
      />
      {/* q5 q6 */}
      <ArrowBody
        w={["3em", "3em", "9em", "9em", "9em", "9em"]}
        top={["58%", "58%", "55%", "55%", "55%", "55%"]}
        left="60%"
      />
      {/* q2 q3 trap */}
      <ArrowBody
        w={["7em", "7em", "11em", "11em", "11em", "11em"]}
        top="58%"
        left={["25.5%", "25.5%", "27.5%", "27.5%", "27.5%", "28.4%"]}
        rotate={["90", "90", "90", "90", "90", "90"]}
      />
      {/* q1 q2 */}
      <ArrowBody
        w={["5em", "5em", "12em", "12em", "12em", "15em"]}
        top={["25%", "25%", "30%", "30%", "30%", "30%"]}
        left={["18%", "18%", "19%", "19%", "19%", "19%"]}
        rotate={["140", "140", "148", "148", "148", "156"]}
      />

      {/* q3 q4 */}
      <ArrowBody
        w={["5em", "5em", "12em", "12em", "12em", "15em"]}
        top={["55%", "55%", "60%", "60%", "60%", "60%"]}
        left={["40%", "40%", "40%", "40%", "40%", "40%"]}
        rotate={["140", "140", "148", "148", "148", "156"]}
      />

      {/* q2 q4 */}
      <ArrowBody
        w={["5em", "5em", "12em", "12em", "12em", "15em"]}
        top={["25%", "25%", "30%", "30%", "30%", "30%"]}
        left={["40%", "40%", "40%", "40%", "40%", "40%"]}
        rotate={["-140", "-140", "-148", "-148", "-148", "-156"]}
      />

      {/* q1 q3 */}
      <ArrowBody
        w={["5em", "5em", "11em", "11em", "11em", "15em"]}
        top={["55%", "55%", "60%", "60%", "60%", "60%"]}
        left={["20%", "20%", "19%", "19%", "19%", "19%"]}
        rotate={["-140", "-140", "-148", "-148", "-148", "-156"]}
      />

      {/* ARROWS */}
      {/* q6 loop */}
      <ArrowLoopSm
        top={["50.4%", "50.4%", "50.2%", "50.2%", "50.2%", "48.2%"]}
        left={["93.3%", "93.3%", "91.4%", null, null, "94%"]}
        rotate="180"
      />
      <ArrowLoopLg
        top={["58.4%", "58.4%", "58.2%", "58.2%", "58.2%", "49.2%"]}
        left={["67.3%", "67.3%", "65.6%", null, null, "90.3%"]}
        rotate={["235", "235", "230", "230", "230", "208"]}
      />
      {/* q1 q2 */}
      <ArrowHead
        top={["25.5%", "25.5%", "26.3%", "26.3%", "26.3%", "24.3%"]}
        left={["25%", "25%", "26.3%", "26.3%", "26.3%", "26.8%"]}
        rotate={["-45", "-45", "-45", "-45", "-45", "-32"]}
      />
      {/* q1 q3 */}
      <ArrowHead
        top={["73%", "73%", "75.6%", "75.6%", "75.6%", "77.3%"]}
        left={["25.5%", "25.5%", "25.7%", "25.7%", "25.7%", "26.7%"]}
        rotate={["40", "40", "40", "40", "40", "25"]}
      />
      {/* q2 t */}
      <ArrowHead
        top={["39.5%", "39.5%", "38.9%", "38.9%", "38.9%", "38.6%"]}
        left={["29.9%", "29.9%", "29.82%", "29.82%", "29.82%", "29.9%"]}
        rotate={["90", "90", "90", "90", "90", "90"]}
      />
      {/* q3 t */}
      <ArrowHead
        top={["59.3%", "59.3%", "61%", "61%", "61%", "61.5%"]}
        left={["29.9%", "29.9%", "30%", "30%", "30%", "30%"]}
        rotate={["-90", "-90", "-90", "-90", "-90", "-90"]}
      />
      {/* Trap */}
      <ArrowLoopLg
        top={["58.4%", "58.4%", "58.2%", "58.2%", "58.2%", "49.2%"]}
        left={["33.1%", "33.1%", "37.3%", "37.3%", "37.3%", "34.3%"]}
        rotate={["235", "235", "230", "230", "230", "208"]}
      />
      <ArrowLoopSm
        top={["49.4%", "49.4%", "50.2%", "50.2%", "50.2%", "50.2%"]}
        left={["37%", "37%", "35.5%", "35.5%", "35.5%", "35.5%"]}
        rotate={["180", "180", "180", "180", "180", "180"]}
      />
      {/* q2 q4 */}
      <ArrowHead
        top={["43.8%", "43.8%", "44.5%", "44.5%", "44.5%", "45.8%"]}
        left={["45.7%", "45.7%", "46%", "46%", "46%", "46.9%"]}
        rotate={["45", "45", "35", "35", "35", "25"]}
      />
      {/* q3 q4 edit */}
      <ArrowHead
        top={["57.3%", "57.3%", "57.3%", "57.3%", "57.3%", "55.5%"]}
        left={["46%", "46%", "46.4%", "46.4%", "46.4%", "47%"]}
        rotate={["-45", "-45", "-45", "-45", "-45", "-32"]}
      />
      {/* q5 q6 edit */}
      <ArrowHead
        top={["50%", "50%", "49.7%", null, null, "49.7%"]}
        left={["80%", "80%", "81.2%", null, null, "82.6%"]}
      />
      {/* q4 q5 edit */}
      <ArrowHead
        top={["50%", "50%", "49.7%", null, null, "49.7%"]}
        left={["62%", "62%", "63.2%", null, null, "64.6%"]}
      />
      <Atom
        variant="q1"
        variants={variants}
        initial="initial"
        animate={currentNode == 1 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        start
      </Atom>
      <Atom
        variant="q2"
        variants={variants}
        initial="initial"
        animate={currentNode == 2 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        2
      </Atom>
      <Atom
        variant="q3"
        variants={variants}
        initial="initial"
        animate={currentNode == 3 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        3
      </Atom>
      <Atom
        variant="q4"
        variants={variants}
        initial="initial"
        animate={currentNode == 4 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        4
      </Atom>
      <Atom
        variant="q5"
        variants={variants}
        initial="initial"
        animate={currentNode == 5 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        5
      </Atom>
      <Atom
        variant="q6"
        variants={variants}
        initial="initial"
        animate={currentNode == 6 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        end
      </Atom>
      <Atom
        variant="T"
        variants={variants}
        initial="initial"
        animate={currentNode == "T" ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        T
      </Atom>
    </>
  );
};

export default FirstDFA;
