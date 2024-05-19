import { Badge, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  ArrowHead, ArrowLoopSm,
  ArrowLoopLg, ArrowBody
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

const SecondDFA = ({ currentNodeVal, simulatingStatus }) => {
  return (
    <>
      {/* 3 6 */}
      <Text size="label" top="27%" left="40%">
        1
      </Text>
      {/* q3 q7 */}
      <Text size="label" top="45%" left="40%">
        0
      </Text>
      {/* q6 q3 */}
      <Text size="label" top="62%" left="40%">
        1
      </Text>
      {/* q4 q6 */}
      <Text size="label" top="90%" left="40%">
        0
      </Text>
      {/* q5 q8 */}
      <Text size="label" top="27%" left="60.5%">
        1
      </Text>
      {/* q7 q8 */}
      <Text size="label" top="45%" left="59%">
        1
      </Text>
      {/* q6 q8 */}
      <Text size="label" top="72.5%" left="60.5%">
        0
      </Text>
      {/* q5 q7 */}
      <Text size="label" top="31%" left="52%">
        0
      </Text>
      {/* q7 q6 */}
      <Text size="label" top="67%" left="52%">
        0
      </Text>
      {/* q2 q3 */}
      <Text size="label" top="45%" left="20%">
        1
      </Text>
      {/* q4 q3 */}
      <Text size="label" top="67%" left="28.5%">
        1
      </Text>
      {/* q2 q4 */}
      <Text size="label" top="73%" left="20%">
        0
      </Text>
      {/* q6 loop */}
      <Text left={["82.3%", "82.3%", "78.6%", null, null, "77.3%"]}
        top={["50.4%", "50.4%", "49.7%", "49.7%", "49.7%", "49.5%"]}
        size="label">
        0,1
      </Text>

      {/* start end */}
      <ArrowBody
        w={["12em", "12em", "25em", null, null, "35em"]}
        top={["58%", "58%", "55%", "55%", "55%", "55%"]}
        left="38%"
      />
      {/* 6 5 4*/}
      <ArrowBody
        w={["8em", "8em", "11em", null, null, "11em"]}
        top={["56%", "56%", "52%", null, null, "55%"]}
        left={["45.5%", "45.5%", "47.5%", null, null, "48.5%"]}
        rotate="90"
      />
      {/* 3 4 */}
      <ArrowBody
        w={["4em", "4em", "4em", null, null, "3em"]}
        top={["65%", "65%", "65%", null, null, "67%"]}
        left={["25.5%", "25.5%", "28%", null, null, "28.5%"]}
        rotate="90"
      />
      {/* 2 4 */}
      <ArrowBody
        w={["5em", null, "8em", null, null, "13em"]}
        top={["71%", null, "71%", null, null, "71%"]}
        left={["16%", null, "18%", null, null, "18%"]}
        rotate={["46", null, "38", null, null, "27"]}
      />
      {/* 3 6 */}
      <ArrowBody
        w={["5em", null, "8em", null, null, "13em"]}
        top={["71%", null, "71%", null, null, "71%"]}
        left={["36%", null, "38%", null, null, "38%"]}
        rotate={["46", null, "38", null, null, "27"]}
      />
      {/* 3 5 */}
      <ArrowBody
        w={["5em", null, "8em", null, null, "12em"]}
        top={["29%", null, "30%", null, null, "29%"]}
        left={["36%", null, "38%", null, null, "38%"]}
        rotate={["133", null, "141", null, null, "152"]}
      />
      {/* 6 end */}
      <ArrowBody
        w={["5em", null, "8em", null, null, "12em"]}
        top={["27%", null, "29%", null, null, "29%"]}
        left={["64%", null, "62%", null, null, "62%"]}
        rotate={["227", null, "220", null, null, "208"]}
      />
      {/* 2 4 */}
      <ArrowBody
        w={["3em", null, "5em", null, null, "9em"]}
        top={["93%", null, "90%", null, null, "91%"]}
        left="40%"
      />
      {/* 4 end */}
      <ArrowBody
        w={["5em", null, "8em", null, null, "12em"]}
        top={["65%", null, "65%", null, null, "65%"]}
        left={["55%", null, "57.5%", null, null, "59%"]}
        rotate={["133", null, "141", null, null, "152"]}
      />
      {/* 5 end */}
      <ArrowHead
        top={["50%", null, "49.7%", null, null, "49.7%"]}
        left={["64.3%", null, "65.3%", null, null, "66.6%"]}
      />
      {/* 3 5 */}
      <ArrowHead
        top={["50%", null, "49.7%", null, null, "49.7%"]}
        left={["44.2%", null, "45.3%", null, null, "46.6%"]}
      />
      {/* start 3 */}
      <ArrowHead
        top={["50%", null, "49.7%", null, null, "49.7%"]}
        left={["24.3%", null, "25.3%", null, null, "26.6%"]}
      />
      {/* 2 3 */}
      <ArrowHead
        top={["60%", null, "61%", null, null, "61.5%"]}
        left={["30.3%", null, "30.4%", null, null, "30.1%"]}
        rotate="-90"
      />
      {/* start 2 */}
      <ArrowHead
        top={["77.5%", null, "79%", null, null, "80.6%"]}
        left={["26.3%", null, "26.3%", null, null, "26.8%"]}
        rotate={["46", null, "38", null, null, "27"]}
      />
      {/* 3 6 */}
      <ArrowHead
        top={["22.7%", null, "21.7%", null, null, "19.3%"]}
        left={["45.9%", null, "46.4%", null, null, "46.8%"]}
        rotate={["315", null, "324", null, null, "330"]}
      />
      {/* 4 3 */}
      <ArrowHead
        top={["56.9%", null, "56.8%", null, null, "56.5%"]}
        left={["34.4%", null, "33.6%", null, null, "33%"]}
        rotate={["226", null, "218", null, null, "215"]}
      />
      {/* 2 4 */}
      <ArrowHead
        top={["85.4%", null, "84.7%", null, null, "85.8%"]}
        left={["44.2%", null, "45.3%", null, null, "46.6%"]}
      />
      {/* 4 5 */}
      <ArrowHead
        top={["75%", null, "74.7%", null, null, "73.6%"]}
        left={["50.2%", null, "49.9%", null, null, "50%"]}
        rotate="90"
      />
      {/* 5 6 */}
      <ArrowHead
        top={["40.1%", null, "39.8%", null, null, "38.6%"]}
        left={["50.2%", null, "49.9%", null, null, "50%"]}
        rotate="90"
      />
      {/* 4 end */}
      <ArrowHead
        top={["57.2%", null, "56.5%", null, null, "56.6%"]}
        left={["65.7%", null, "66.2%", null, null, "67.1%"]}
        rotate={["315", null, "321", null, null, "330"]}
      />
      {/* 6 end */}
      <ArrowHead
        top={["42.4%", null, "44%", null, null, "44%"]}
        left={["66%", null, "66.2%", null, null, "67.1%"]}
        rotate={["40", null, "40", null, null, "30"]}
      />
      <ArrowLoopSm
        top={["50.4%", "50.4%", "50.2%", "50.2%", "50.2%", "50.2%"]}
        left={["77%", "77.2%", "75.5%", null, null, "76%"]}
        rotate="180"
      />
      <ArrowLoopLg
        top={["58.4%", "58.4%", "58.2%", "58.2%", "58.2%", "49.2%"]}
        left={["67.3%", "67.3%", "65.6%", null, null, "74.3%"]}
        rotate={["235", "235", "230", "230", "230", "208"]}
      />
      <Atom
        variant="7"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 1 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        start
      </Atom>
      <Atom
        variant="4"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 3 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        3
      </Atom>
      <Atom
        variant="6"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 2 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        2
      </Atom>
      <Atom
        variant="1"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 6 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        6
      </Atom>
      <Atom
        variant="3"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 4 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        4
      </Atom>
      <Atom
        variant="2"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 5 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        5
      </Atom>
      <Atom
        variant="5"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 7 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        end
      </Atom>
    </>
  );
};

export default SecondDFA;
