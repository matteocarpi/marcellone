import styled from "styled-components";
import Button from "../Button";

interface IProps {
  fullName: string;
  cv: string;
  showreel: string;
}

const Container = styled.div`
  margin-top: 40vh;
  margin-left: 10vw;
  position: relative;
  z-index: 1;
  width: min-content;

  h1 {
    white-space: nowrap;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const IntroContent: React.FunctionComponent<IProps> = ({
  fullName,
  showreel,
  cv,
}) => {
  return (
    <Container>
      <h1>{fullName}</h1>
      <Buttons>
        <Button variant="externalLink" href={showreel}>
          Showreel
        </Button>
        <Button apparence="light" variant="externalLink" href={cv}>
          Download CV
        </Button>
      </Buttons>
    </Container>
  );
};

export default IntroContent;
