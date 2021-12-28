import styled from "styled-components";
import { fetchGraphQL } from "../utils/api";
import client from "../utils/client";

import BirdOverlay from "../src/components/BirdOverlay";

const Wrapper = styled.main`
  position: absolute;
  z-index: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const Title = styled.h1``;

export default function Home({ birds }) {
  return (
    <Wrapper>
      <Container>
        <Title>Marcello Newman</Title>
        <BirdOverlay birds={birds} />
      </Container>
    </Wrapper>
  );
}

export const getServerSideProps = async () => {
  let birds = [];

  try {
    const birdResp = await client.getEntries({
      content_type: "bird",
    });

    birds = birdResp.items;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log("------ HOME SSR FAILED ----");
    // eslint-disable-next-line no-console
    console.log(e);
  }

  return {
    props: {
      title: "Home",
      birds,
    },
  };
};
