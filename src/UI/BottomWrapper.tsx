import React from "react";
import styled from "styled-components";

interface bottomWrapperProps {
    children: React.ReactNode;
    width?: string;
    height?: string;
    type?: string;
}

const StyleForm = styled.div<Pick<bottomWrapperProps, "width" | "height">>`
  display: flex;
  flex-direction: column;
  padding: 8rem;
  width: 200px;
  height: 400px;
  background: pink;
  position: absolute;
`;

const BottomWrapper: React.FC<bottomWrapperProps> = ({
                                                     children,
                                                     width,
                                                     height,
    type
                                                 }) => {
    return (
        <StyleForm width={width} height={height}>
            {children}
        </StyleForm>
    );
};

export default BottomWrapper;
