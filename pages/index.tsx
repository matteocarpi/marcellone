import type { NextPage, GetStaticProps } from "next";
import styled from "styled-components";

import { fetchGraphQL } from "../lib/api";

interface IProps {
  data: {
    fullName: string;
    height: number;
    eyes: string;
    hair: string;
  };
}

const Container = styled.div`
  h1 {
    color: ${({ theme }) => theme.colors.primary};
  }
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Info = styled.h4`
  font-weight: 200;
`;

const Home: NextPage<IProps> = ({ data }) => {
  return (
    <Container>
      <h1>{data.fullName}</h1>
      <Info>
        <strong>Altezza: </strong>
        {data.height}
      </Info>
      <Info>
        <strong>Occhi: </strong>
        {data.eyes}
      </Info>
      <Info>
        <strong>Capelli: </strong>
        {data.hair}
      </Info>
    </Container>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  // Call an external API endpoint to get posts
  const resp = await fetchGraphQL(`query {
    homeCollection(where: {sys: {id: "1OW8fKUdUdr1zOUsMpcKXm"}}) {
      items {
        fullName
        height
        eyes
        hair
      }
    }
  }`);
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  const data = resp.data.homeCollection.items[0];

  return {
    props: {
      data,
    },
  };
};
