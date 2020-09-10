import React from "react";
import styled from "styled-components";
import theme from "../theme";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  fontsize?: string;
  margin?: string;
}

const StyledHead = styled.h1<Pick<TypographyProps, "fontsize" | "margin">>`
  color: ${theme.Nav.dark};
  text-shadow: 1px 1px 1px ${theme.Nav.bright};
  font-size: ${({ fontsize }) => fontsize};
  margin: ${({ margin }) => margin};
`;

export const HeadInput: React.FC<TypographyProps> = ({
  children,
  className,
  fontsize = "1rem",
  margin = "0 0 0 0",
}) => {
  return (
    <StyledHead className={className} fontsize={fontsize} margin={margin}>
      {children}
    </StyledHead>
  );
};
