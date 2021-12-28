import styled from "styled-components";
import { fetchGraphQL } from "../utils/api";
import client from "../utils/client";
import Image from "next/dist/client/image";

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

export default function Home({ home }) {
  console.log({ home });

  return (
    <Wrapper>
      <Container>
        <Title>Marcello Newman</Title>
        <Image
          src={`https://${home.fields.mainImage.fields.file.url}`}
          alt=""
          layout="fill"
        />
      </Container>
    </Wrapper>
  );
}

export const getServerSideProps = async () => {
  let home;

  try {
    const birdResp = await client.getEntries({
      content_type: "home",
    });

    home = birdResp.items[0];
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log("------ HOME SSR FAILED ----");
    // eslint-disable-next-line no-console
    console.log(e);
  }

  return {
    props: {
      title: "Home",
      home,
    },
  };
};
