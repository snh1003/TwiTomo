import React from "react";
import styled from "styled-components";

interface mainWrapperProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
}

const StyleForm = styled.div<Pick<mainWrapperProps, "width" | "height">>`
  display: flex;
  flex-direction: column;
  padding: 8rem;
  width: 200px;
  height: 400px;
  background: pink;
  position: absolute;
`;



const MainWrapper: React.FC<mainWrapperProps> = ({
  children,
  width,
  height,
}) => {
  return (
    <StyleForm width={width} height={height}>
      {children}
    </StyleForm>
  );
};

export default MainWrapper;
