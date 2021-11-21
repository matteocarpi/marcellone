import Image from "next/image";
import styled from "styled-components";

export interface ProjectProps {
  image: {
    title: string;
    url: string;
    width: number;
    height: number;
  };
  credits: {
    title: string;
    author: string;
  };
}

interface IProps {
  project: ProjectProps;
}

const ImageContainer = styled.div`
  max-width: 400px;
`;

const ProjectImage: React.FunctionComponent<IProps> = ({ project }) => {
  const { url, title, width, height } = project.image;

  const imageWidth = 1;
  const imageHeight = height / width;

  return (
    <ImageContainer>
      <Image
        layout="responsive"
        alt={title}
        src={url}
        objectFit="cover"
        width={imageWidth}
        height={imageHeight}
      />
    </ImageContainer>
  );
};

export default ProjectImage;
