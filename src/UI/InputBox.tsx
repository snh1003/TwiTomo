import React from "react";
import styled from "styled-components";

interface InputBoxProps {
    value?: string;
    width?: string;
    height?: string;
    borderRadius?: string;
    margin?: string;
    Type?: string;
}

const StyledInput = styled.input<
    Pick<InputBoxProps, "width" | "height" | "borderRadius" | "margin">
    >`
  padding: 1rem;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius};
  margin: ${({ margin }) => margin};
`;

const StyledBox = styled.article`
float:left;
display: inline;
`

const InputBox: React.FC<InputBoxProps> = ({ value,width,height,borderRadius,margin,Type }) => {
    return (
        <StyledInput margin={margin}></StyledInput>
    );
};

export default InputBox;
