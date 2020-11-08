import React from "react";
import styled from "styled-components";

interface TextAreaProps {
  value?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  margin?: string;
  Type?: string;
  onChange?: any;
  disabled?: boolean;
}

const StyledInput = styled.textarea<
  Pick<TextAreaProps, "width" | "height" | "borderRadius" | "margin">
>`
  padding: 1rem;
  width: 100%;
  height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius};
  margin: ${({ margin }) => margin};
  border: none;

  &: disabled {
    background: white;
  }
`;

const StyledBox = styled.div`
  width: 100%;
  height: 100px;
`;

const TextAreaBox: React.FC<TextAreaProps> = ({
  value,
  width,
  height,
  borderRadius,
  margin,
  Type,
  onChange,
  disabled,
}) => {
  return (
    <StyledBox>
      <StyledInput
        width={width}
        height={height}
        onChange={onChange}
        margin={margin}
        disabled={disabled}
        value={value}
      />
    </StyledBox>
  );
};

export default TextAreaBox;
