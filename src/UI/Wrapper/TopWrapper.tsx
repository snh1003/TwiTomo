import React from "react";
import styled from "styled-components";

interface TopWrapperProps {
  children: React.ReactNode;
  type?: String;
}

const StyleForm = styled.article`
  flex: 2;
  width: 470px;
  background: green;
  display: grid;
  grid-template-rows: 2fr 2fr;
  grid-template-columns: repeat(4, 1fr);
`;
// &:nth-child(1) {
//   grid-column: span 3;
//   background: yellow;
// }
// &:nth-child(2) {
//   grid-column: span 1;
//   background: yellow;
// }
const StyledTop = styled.article`
  background: blue;
  &:nth-child(1) {
    grid-column-start: 1;
    grid-column-end: 4;
    background: yellow;
  }
  &:nth-child(2) {
    grid-column-start: 4;
    grid-column-end: 4;
    background: pink;
  }
  grid-column: span 2;
`;

const TopWrapper: React.FC<TopWrapperProps> = ({ children, type }) => {
  return (
    <StyleForm>
      <StyledTop>sdf</StyledTop>
      <StyledTop>sdf</StyledTop>
      <StyledTop>sdf</StyledTop>
      <StyledTop>vdsvs</StyledTop>
    </StyleForm>
  );
};

export default TopWrapper;
