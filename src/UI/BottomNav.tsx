import React from "react";
import styled from "styled-components";
import theme from "../theme";

interface BottomNavProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
  borderRadius?: string;
  margin?: string;
}

const StyledNav = styled.div<
  Pick<BottomNavProps, "width" | "height" | "borderRadius" | "margin">
>`
  background-color: ${theme.Nav.base};
  box-shadow: -5px -5px 20px ${theme.Nav.bright}, 5px 5px 20px ${theme.Nav.dark};
  padding: 9px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius};
  margin: ${({ margin }) => margin};
`;

const BottomNav: React.FC<BottomNavProps> = ({
  children,
  width,
  height,
  borderRadius,
  margin,
}) => {
  return (
    <StyledNav
      width={width}
      height={height}
      borderRadius={borderRadius}
      margin={margin}
    >
      {children}
    </StyledNav>
  );
};

export default BottomNav;
