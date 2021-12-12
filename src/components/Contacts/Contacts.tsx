import styled from "styled-components";
import CTAGroup from "../CTAGroup";

interface IProps {
  fullName: string;
  info: string;
  email: string;
  cv: string;
  showreel: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8rem auto;
  max-width: 350px;
`;

const Name = styled.h1`
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: 0;
  text-align: center;
`;

const Beauties = styled.p`
  text-align: center;
`;

const Email = styled.a`
  text-align: center;
  margin: 4rem 0;
`;

const Contacts: React.FunctionComponent<IProps> = ({
  fullName,
  info,
  email,
  showreel,
  cv,
}) => {
  return (
    <Container>
      <Name>{fullName}</Name>
      <Beauties>{info}</Beauties>
      <Email href={`mailto:${email}`}>{email}</Email>
      <CTAGroup dark showreel={showreel} cv={cv} />
    </Container>
  );
};

export default Contacts;
