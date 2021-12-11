import styled from "styled-components";
import Image from "next/image";

import { IImage } from "../../types";

interface IProps {
  image: IImage;
}

const Container = styled.div`
  margin-bottom: 2rem;
`;

const GalleryImage: React.FunctionComponent<IProps> = ({ image }) => {
  const { url, height, width, fileName } = image;

  console.log({ width, height });
  return (
    <Container>
      <Image
        src={url}
        alt={fileName}
        layout="responsive"
        width={width}
        height={height}
      />
    </Container>
  );
};

export default GalleryImage;
