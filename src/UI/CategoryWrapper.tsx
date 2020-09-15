import React from "react";
import styled from "styled-components";

interface CategoryProps {
  children: React.ReactNode;
}

const StyledBox = styled.article`
  width: 100px;
  border: solid thin;
  border-radius: 5px;
  box-shadow: 2px 2px 1px 0px rgba(0, 0, 255, 0.2);
`;

const CategoryBox: React.FC<CategoryProps> = ({ children }) => {
  return <StyledBox>{children}</StyledBox>;
};

export default CategoryBox;
