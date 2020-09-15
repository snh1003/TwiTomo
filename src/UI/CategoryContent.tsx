import React from "react";
import styled from "styled-components";

interface CategoryContentProps {
  Value: {
    Date: String;
    Title: String;
    Name: String;
  };
}

const StyledBox = styled.div`
  width: 100px;
  border-top: thin solid #bcbcbc;
`;

const CategoryContentBox: React.FC<CategoryContentProps> = ({ Value }) => {
  return <StyledBox></StyledBox>;
};

export default CategoryContentBox;
