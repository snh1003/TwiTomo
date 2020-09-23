import React from "react";
import styled from "styled-components";
import {Settings} from "@styled-icons/feather/Settings"
import imgTest from "../../img/ImgTest.jpeg"

interface TopWrapperProps {
  children: React.ReactNode;
  type?: String;
}

const StyleForm = styled.article`

  flex: 2 1 15%;
  width: 470px;
  display: grid;
  grid-template-rows: 5rem 5rem;
  grid-template-columns: repeat(6, 1fr);
`;
// &:nth-child(1) {
//   grid-column: span 3;
//   background: yellow;
// }
// &:nth-child(2) {
//   grid-column: span 1;
//   background: yellow;
// }
const StyledTop = styled.div`
    align-self : center;
  &:nth-child(1) {
  margin-left: 50px;
  margin-top: 10px;
  font-size : 30px;
    grid-column-start: 1;
    grid-column-end: 5;
  }
  &:nth-child(2) {  
  padding-top: 30px;
  box-sizing: border-box;
    grid-column-start: 5;
    grid-column-end: 6;
  }

`;

const StyledMenu = styled.div`

  grid-column: span 3;
  font-size: 20px; 
  align-self: end;
  text-align : center;
  margin-bottom: 10px;
   
`

const StyledImage = styled.img`

width: 85px;
height: 85px;
`
const StyledSetting = styled(Settings)`
margin-left : 20px;

`

const TopWrapper: React.FC<TopWrapperProps> = ({ children, type }) => {
  return (
    <StyleForm>
      <StyledTop>김 아무개 님 <StyledSetting size={30}/></StyledTop>
        <StyledTop><StyledImage src = {imgTest}/></StyledTop>
      <StyledMenu>새로 올라온 피드</StyledMenu>
      <StyledMenu>참여중피드</StyledMenu>
    </StyleForm>
  );
};

export default TopWrapper;
