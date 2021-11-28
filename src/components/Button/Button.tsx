import styled, { css, StyledFunction } from "styled-components";

interface IProps {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  light?: boolean;
  to?: string;
  href?: string;
  variant: "link" | "button" | "externalLink";
  apparence?: "light" | "red" | "lightRed" | undefined;
}

interface ButtonProps {
  apparence: IProps["apparence"];
}

const buttonStyles = css<ButtonProps>`
  width: 150px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Quicksand-Light_Medium;
  font-size: 16px;
  color: #903633;
  letter-spacing: 0;
  text-align: center;
  text-decoration: none;

  ${({ apparence }) =>
    apparence === "light" &&
    css`
      background-color: transparent;
      color: white;
    `}
`;

const StyledButton = styled.button<
  ButtonProps & React.HTMLProps<HTMLButtonElement>
>`
  ${buttonStyles}
`;

const StyledExtLink = styled.a<ButtonProps>`
  ${buttonStyles}
`;

const Button: React.FunctionComponent<IProps> = ({
  type,
  onClick,
  href,
  children,
  variant,
  apparence,
}) => {
  return variant === "externalLink" ? (
    <StyledExtLink apparence={apparence} href={href} target="_blank">
      {children}
    </StyledExtLink>
  ) : (
    <StyledButton type={type} apparence={apparence} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
