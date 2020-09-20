import React from "react";
import styled from "styled-components";

interface MiddleWrapperProps {
  children: React.ReactNode;
}

const StyleForm = styled.article`
display: flex;
flex-direction : column;
  flex: 5 1 70% ;
  width: 470px;
  justify-content: center;
`;

const MiddleWrapper: React.FC<MiddleWrapperProps> = ({ children }) => {
  return <StyleForm>{children}</StyleForm>;
};

export default MiddleWrapper;
