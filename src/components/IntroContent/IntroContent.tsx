import styled from "styled-components";
import CTAGroup from "../CTAGroup";
interface IProps {
  fullName: string;
  cv: string;
  showreel: string;
}
const Wrapper = styled.div``;

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

const Name = styled.h1`
  color: ${({ theme }) => theme.colors.light};
`;

const ContactsLink = styled.a`
  position: absolute;
  right: -25px;
  bottom: 40px;
  color: ${({ theme }) => theme.colors.light};
  text-decoration: underline;
  font-size: 20px;
  transform: rotate(-90deg);
`;

const IntroContent: React.FunctionComponent<IProps> = ({
  fullName,
  showreel,
  cv,
}) => {
  return (
    <Wrapper>
      <Container>
        <Name>{fullName}</Name>
        <CTAGroup showreel={showreel} cv={cv} />
      </Container>
      <ContactsLink data-scroll href="#contacts">
        Contacts
      </ContactsLink>
    </Wrapper>
  );
};

export default IntroContent;
