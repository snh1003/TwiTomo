import React from "react";
import styled from "styled-components";

interface MiddleWrapperProps {
  children: React.ReactNode;
}

const StyleForm = styled.article`
  flex: 5;
  width: 470px;
`;

const MiddleWrapper: React.FC<MiddleWrapperProps> = ({ children }) => {
  return <StyleForm>{children}</StyleForm>;
};

export default MiddleWrapper;
