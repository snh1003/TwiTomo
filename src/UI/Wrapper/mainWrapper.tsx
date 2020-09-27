import React from "react";
import styled from "styled-components";

interface mainWrapperProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
}

const StyleForm = styled.section<Pick<mainWrapperProps, "width" | "height">>`
  display: flex;
  flex-direction: column;
  width: 470px;
  height: 767px;
  position: absolute;
    top:50%;
  left:50%;
  transform: translate(-50%, -50%);
  border: solid thin;
  background : ${(props) => props.theme.main.background}
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
