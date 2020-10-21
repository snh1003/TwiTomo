import React from "react";
import styled from "styled-components";

interface InputBoxProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  fontsize?: string;
  margin?: string;
  padding?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  value?: string;
  min?: string;
  max?: string;
}

const StyledInput = styled.input<
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
  text-align: center;
`;

const InputBox: React.FC<InputBoxProps> = ({
  width,
  height,
  borderRadius,
  fontsize,
  padding,
  margin,
  onChange,
  onKeyPress,
  placeholder,
  type,
  min,
  max,
}) => {
  return (
    <StyledInput
      type={type}
      min={min}
      max={max}
      placeholder={placeholder}
      padding={padding}
      fontsize={fontsize}
      width={width}
      height={height}
      margin={margin}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  );
};

export default InputBox;
