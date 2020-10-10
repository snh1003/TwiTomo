import React from "react";
import styled from "styled-components";

interface TagProps {
  children?: React.ReactNode;
}

const StyledTag = styled.div`
  text-align: center;
  border-radius: 8px;
  background: ${(props) => props.theme.main.base};
  margin: 3px 3px 3px 14px;
  box-shadow: 0 0.8px gray;
  width: 59px;
  height: 20px;
  color: white;
  &:hover {
    box-shadow: 0 0.8px 5px gray;
    background: purple;
  }
`;

const TagBox: React.FC<TagProps> = ({ children }) => {
  return <StyledTag>{children}</StyledTag>;
};

export default TagBox;
