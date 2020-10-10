import React from "react";
import styled from "styled-components";

interface TagWrapperProps {
  children: React.ReactNode;
}

const StyleForm = styled.article`
  display: flex;
  flex-direction: row;
  width: 470px;
  justify-content: flex-start;
`;

const TagWrapper: React.FC<TagWrapperProps> = ({ children }) => {
  return <StyleForm>{children}</StyleForm>;
};

export default TagWrapper;
