import React from "react";
import styled from "styled-components";
import theme from "../theme";

interface titlebarProps {
    children: React.ReactNode;
    width?: string;
    height?: string;
    borderRadius?: string;
    margin?: string;
}

const StyledCard = styled.div<
`;

const titlebar: React.FC<titlebarProps> = ({
                                               children,
                                               width,
                                               height,
                                               borderRadius,
                                               margin,
                                           }) => {
    return (
        <StyledCard
            width={width}
            height={height}
            borderRadius={borderRadius}
            margin={margin}
        >
            {children}
        </StyledCard>
    );
};

export default titlebar;
