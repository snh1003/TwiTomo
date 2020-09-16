import React from "react";
import styled from "styled-components";

interface CategoryContentProps {
  Value: {
    date: String;
    title: String;
    name: String;
  };
}

const StyledBox = styled.div`
  width: 100px;
  border-top: thin solid #bcbcbc;
`;

const CategoryContentBox: React.FC<CategoryContentProps> = ({ Value }) => {
  return <StyledBox><h2>{Value.date}</h2></StyledBox>;
};

export default CategoryContentBox;
