import type { NextPage, GetStaticProps } from "next";
import styled from "styled-components";

import { fetchGraphQL } from "../lib/api";

import ProjectsGallery from "../src/components/ProjectsGallery";
import { ProjectProps } from "../src/components/ProjectImage/ProjectImage";

interface IProps {
  data: {
    fullName: string;
    height: number;
    eyes: string;
    hair: string;
    projectsCollection: {
      items: ProjectProps[];
    };
  };
}

const Container = styled.div`
  h1 {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const InfoContainer = styled.section`
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
  console.log({ data });

  console.log(data.projectsCollection.items);
  return (
    <Container>
      <InfoContainer>
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
      </InfoContainer>
      <ProjectsGallery projects={data.projectsCollection.items} />
    </Container>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  // Call an external API endpoint to get posts
  const resp = await fetchGraphQL(`query {
    home(id: "1OW8fKUdUdr1zOUsMpcKXm") {
      fullName
      showreel
      cv {
        url
      }
      mainImage {
        url
        width
        height
        fileName
      }
      galleryCollection {
        items {
          url
          width
          height
          fileName
        }
      }
      info
      email
    }
  }
  `);
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  const data = resp.data.home;

  return {
    props: {
      data,
    },
  };
};
