import React from "react";
import styled from "styled-components";
import theme from "../theme";

interface ButtonProps {
  children: React.ReactNode;
  width?: string;
  borderRadius?: string;
  color?: string;
  margin?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = styled.button<
  Pick<ButtonProps, "width" | "borderRadius" | "color" | "margin">
>`
  width: ${({ width }) => width};
  border-radius: ${({ borderRadius }) => borderRadius};
  color: ${({ color }) => color};
  margin: ${({ margin }) => margin};
  border: 0;
  outline: 0;
  box-shadow: -3px -3px 30px ${theme.main.bright},
    5px 5px 20px ${theme.main.dark};
  font-size: 1rem;
  font-weight: 550;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    box-shadow: -2px -2px 5px ${theme.main.bright},
      2px 2px 5px ${theme.main.dark};
  }

  &:active {
    box-shadow: inset 1px 1px 2px ${theme.main.bright},
      inset -1px -1px 2px ${theme.main.dark};
  }
`;

export const styleButton: React.FC<ButtonProps> = ({
  children,
  width,
  borderRadius,
  color,
  margin = "0 0 0 0",
  onClick,
  disabled,
}) => {
  return (
    <Button
      width={width}
      borderRadius={borderRadius}
      color={color}
      margin={margin}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};
