import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Bird from "../Bird";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 5;
`;

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

export default function BirdOverlay({ birds }) {
  const [index, setIndex] = useState(0);

  return (
    <Wrapper>
      <Container>
        {birds.map(
          (b, i) =>
            i === index && (
              <Bird
                image={b.fields.image.fields.file.url}
                isLeft={b.fields.isLeft}
                setIndex={setIndex}
                totalBirds={birds.length}
              />
            )
        )}
      </Container>
    </Wrapper>
  );
}
