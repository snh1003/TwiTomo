import React from "react";
import styled from "styled-components";

interface SelectInputBoxProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  fontsize?: string;
  margin?: string;
  padding?: string;
}

const StyledSelect = styled.select<
  Pick<
    SelectInputBoxProps,
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
  text-align: center;
  border: none;
  background: white;
`;

const SelectInputBox: React.FC<SelectInputBoxProps> = ({
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
        <option>서울</option>
        <option>부산</option>
        <option>인천</option>
        <option>광주</option>
        <option>대구</option>
      </StyledSelect>
    </>
  );
};

export default SelectInputBox;
