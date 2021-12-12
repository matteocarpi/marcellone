import styled from "styled-components";
import Button from "../Button";

interface IProps {
  showreel: string;
  cv: string;
  dark?: boolean;
}

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CTAGroup: React.FunctionComponent<IProps> = ({ showreel, cv, dark }) => {
  return (
    <Buttons>
      <Button
        apparence={dark ? "red" : undefined}
        variant="externalLink"
        href={showreel}
      >
        Showreel
      </Button>
      <Button
        apparence={dark ? "lightRed" : "light"}
        variant="externalLink"
        href={cv}
      >
        Download CV
      </Button>
    </Buttons>
  );
};

export default CTAGroup;
