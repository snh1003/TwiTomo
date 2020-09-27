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
//
const Button = styled.button<
  Pick<ButtonProps, "width" | "borderRadius" | "color" | "margin">
>`
margin-top : 10%;
  height: 80px;
  width: 95%;
  align-self: center;
  border-radius: 50px;
  border: 0;
  outline: 0;
  box-shadow: 5px 5px 20px ${theme.main.dark};
  font-size: 2rem;
  color: white;
  font-weight: 550;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: linear-gradient( to Right top, #EEC762 10%, #F03A53 50%, #364CED);

  &:hover {
    box-shadow: -2px -2px 5px ${theme.main.bright},
      2px 2px 5px ${theme.main.dark};
       transform: translateY(0.1875em);
  }

  &:active {
    box-shadow: inset 1px 1px 2px ${theme.main.bright},
      inset -1px -1px 2px ${theme.main.dark};
  }
`;

const YanawaButton: React.FC<ButtonProps> = ({
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

export default YanawaButton