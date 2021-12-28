import React from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";

const Wrapper = styled(motion.div)`
  position: absolute;
  bottom: -100px;

  ${({ isLeft }) =>
    isLeft
      ? css`
          right: -100px;
        `
      : css`
          bottom: -100px;
          left: -100px;
        `}
`;

const Container = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
`;

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const getRightVariants = (duration, x) => ({
  hidden: {
    translateX: "0",
  },
  visible: {
    translateX: `${x}vw`,
    translateY: "calc(-100vh - 100px)",
    transition: {
      duration,
      ease: "linear",
    },
  },
});

const getLeftVariants = (duration, x) => ({
  hidden: {
    translateX: "0",
  },
  visible: {
    translateX: `-${x}vw`,
    translateY: "calc(-100vh - 100px)",
    transition: {
      duration,
      ease: "linear",
    },
  },
});

export default function Bird({ image, isLeft, setIndex, totalBirds }) {
  const randomX = getRandomArbitrary(20, 200);

  const duration = getRandomArbitrary(5, 15);

  return (
    <Wrapper
      variants={
        isLeft
          ? getLeftVariants(duration, randomX)
          : getRightVariants(duration, randomX)
      }
      initial="hidden"
      animate="visible"
      isLeft={isLeft}
      onAnimationComplete={() =>
        setIndex(getRandomArbitrary(0, totalBirds - 1))
      }
    >
      <Container>
        <Image src={`http://${image}`} alt="bird" layout="fill" />
      </Container>
    </Wrapper>
  );
}
