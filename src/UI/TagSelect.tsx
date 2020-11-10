import React from "react";
import styled from "styled-components";

interface InputBoxProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  fontsize?: string;
  margin?: string;
  padding?: string;
}

const StyledSelect = styled.select<
  Pick<
    InputBoxProps,
    "padding" | "width" | "height" | "borderRadius" | "margin" | "fontsize"
  >
>`
  font-size: ${({ fontsize }) => fontsize};
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius};
  margin-top: ${({ margin }) => margin};
  margin-bottom: ${({ margin }) => margin};
  place-self: auto center;
  border: none;
  background: white;
  grid-column: span 6;
`;

const SelectBox: React.FC<InputBoxProps> = ({
  width,
  height,
  borderRadius,
  fontsize,
  padding,
  margin,
}) => {
  return (
    <>
      <StyledSelect
        padding={padding}
        fontsize={fontsize}
        width={width}
        height={height}
        margin={margin}
      >
        <option>tokyo</option>
        <option>seoul</option>
      </StyledSelect>
    </>
  );
};

export default SelectBox;
