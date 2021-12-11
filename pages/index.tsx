import type { NextPage, GetStaticProps } from "next";
import Image from "next/image";

import styled from "styled-components";

import { fetchGraphQL } from "../lib/api";
import Gallery from "../src/components/Gallery";
import IntroContent from "../src/components/IntroContent";
import { IImage } from "../src/types";

interface IProps {
  data: {
    fullName: string;
    showreel: string;
    cv: {
      url: string;
    };
    mainImage: IImage;
    galleryCollection: {
      items: IImage[];
    };
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
  overflow: hidden;
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
        <IntroContent
          fullName={data.fullName}
          cv={data.cv.url}
          showreel={data.showreel}
        />
      </IntroImageContainer>
      <Gallery images={data.galleryCollection.items} />
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
