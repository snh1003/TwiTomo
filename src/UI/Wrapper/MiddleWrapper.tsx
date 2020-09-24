import React from "react";
import styled from "styled-components";

interface MiddleWrapperProps {
  children: React.ReactNode;
}

const StyleForm = styled.article`
  display: flex;
  flex-direction: column;
  flex: 5 1 75%;
  width: 470px;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
  justify-content: flex-start;
  overflow: auto;
`;

const MiddleWrapper: React.FC<MiddleWrapperProps> = ({ children }) => {
  return <StyleForm>{children}</StyleForm>;
};

export default MiddleWrapper;
