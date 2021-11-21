import ProjectImage from "../ProjectImage";
import styled from "styled-components";

import { ProjectProps } from "../ProjectImage/ProjectImage";

export interface IProps {
  projects: ProjectProps[];
}

const Container = styled.section`
  max-width: 1280px;
  margin: 0 auto;
`;

const ProjectsGallery: React.FunctionComponent<IProps> = ({ projects }) => {
  return (
    <Container>
      {projects.map((project) => (
        <ProjectImage project={project} key={project.image.url} />
      ))}
    </Container>
  );
};

export default ProjectsGallery;
