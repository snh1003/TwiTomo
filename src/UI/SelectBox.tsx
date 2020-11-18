import React from "react";
import styled from "styled-components";

interface SelectBoxProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  fontsize?: string;
  margin?: string;
  padding?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const StyledSelect = styled.select<
  Pick<
    SelectBoxProps,
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
  background: ${(props) => props.theme.main.background};
  grid-column: span 6;
`;

const SelectBox: React.FC<SelectBoxProps> = ({
  width,
  height,
  borderRadius,
  fontsize,
  padding,
  margin,
  onChange,
}) => {
  return (
    <>
      <StyledSelect
        padding={padding}
        fontsize={fontsize}
        width={width}
        height={height}
        margin={margin}
        onChange={onChange}
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

export default SelectBox;
