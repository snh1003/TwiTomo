import React from "react";
import styled from "styled-components";

interface InputBoxProps {
  value?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  margin?: string;
  Type?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const StyledInput = styled.input<
  Pick<InputBoxProps, "width" | "height" | "borderRadius" | "margin">
>`
  padding: 1rem;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius};
  margin-top: ${({ margin }) => margin};
  margin-bottom: ${({ margin }) => margin};
`;

const StyledBox = styled.article`
  float: left;
  display: inline;
`;

const InputBox: React.FC<InputBoxProps> = ({
  value,
  width,
  height,
  borderRadius,
  margin,
  Type,
  onChange,
  onKeyPress,
}) => {
  return (
    <StyledInput
      placeholder="kim"
      width={width}
      height={height}
      margin={margin}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  );
};

export default InputBox;
