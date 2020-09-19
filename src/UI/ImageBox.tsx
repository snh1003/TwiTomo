import React from "react";
import styled from "styled-components";
import theme from "../theme";

interface ImageProps {
    children: React.ReactNode;
    width?: string;
    height?: string;
    borderRadius?: string;
    margin?: string;
}

const StyledCard = styled.div<
    Pick<ImageProps, "width" | "height" | "borderRadius" | "margin">
    >`
  background-color: ${theme.main.base};
  box-shadow: -5px -5px 20px ${theme.main.bright},
    5px 5px 20px ${theme.main.dark};
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

const ImageBox: React.FC = ({
                               }) => {
    return (
        <StyledBox>
            <h3>hahahaha</h3>
            <ul>
                <li>hahxa</li>
                <li>haha</li>
                <li>haha</li>
                <li>haha</li>
            </ul>
        </StyledBox>
    );
};

export default ImageBox;
