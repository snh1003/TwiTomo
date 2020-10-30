import React from "react";
import styled from "styled-components";

interface MiddleWrapperProps {
  children: React.ReactNode;
}

const StyleForm = styled.article`
  display: flex;
  flex-direction: column;
  flex: 5 1 75%;
  width: ${(props) => props.theme.Platform.mobile};
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
  justify-content: flex-start;
  overflow: auto;
  @media only screen and (min-width: ${(props) =>
      props.theme.Platform.desktop}) {
    width: ${(props) => props.theme.Platform.desktop};
  }
`;

const MiddleWrapper: React.FC<MiddleWrapperProps> = ({ children }) => {
  return <StyleForm>{children}</StyleForm>;
};

export default MiddleWrapper;
