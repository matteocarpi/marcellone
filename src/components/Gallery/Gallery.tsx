import styled from "styled-components";
import { IImage } from "../../types";
import GalleryImage from "../GalleryImage";

interface IProps {
  images: IImage[];
}

const Container = styled.section`
  position: relative;
  max-width: 1024px;
  margin: 2rem auto;
`;

const Gallery: React.FunctionComponent<IProps> = ({ images }) => {
  return (
    <Container>
      {images.map((image) => (
        <GalleryImage key={image.url} image={image} />
      ))}
    </Container>
  );
};

export default Gallery;
