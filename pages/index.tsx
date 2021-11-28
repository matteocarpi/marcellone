import type { NextPage, GetStaticProps } from "next";
import Image from "next/image";

import styled from "styled-components";

import { fetchGraphQL } from "../lib/api";

interface Image {
  url: string;
  width: string;
  height: string;
  fileName: string;
}
interface IProps {
  data: {
    fullName: string;
    showreel: string;
    cv: {
      url: string;
    };
    mainImage: Image;
    galleryCollecion: Image[];
    info: string;
    email: string;
  };
}

const Container = styled.div`
  h1 {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const IntroImageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 0;
`;

const IntroContent = styled.div`
  position: relative;
  z-index: 1;
`;

const Home: NextPage<IProps> = ({ data }) => {
  console.log({ data });
  return (
    <Container>
      <IntroImageContainer>
        <Image
          src={data.mainImage.url}
          layout="fill"
          alt={data.mainImage.fileName}
          objectFit="cover"
          objectPosition="center"
        />
      <IntroContent>
        <h1>{data.fullName}</h1>
      </IntroContent>
      </IntroImageContainer>
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

  const data = resp.data.home;

  return {
    props: {
      data,
    },
  };
};
