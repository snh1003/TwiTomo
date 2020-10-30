import React from "react";
import styled from "styled-components";
import { Settings } from "@styled-icons/feather/Settings";

interface TopWrapperProps {
  type?: String;
  username?: string;
}

const StyleForm = styled.article`
  flex: 2 1 15%;
  width: ${(props) => props.theme.Platform.mobile};
  display: grid;
  align-items: center;
  grid-template-rows: 5rem 3rem;
  grid-template-columns: repeat(6, 1fr);
  @media only screen and (min-width: ${(props) =>
      props.theme.Platform.desktop}) {
    width: ${(props) => props.theme.Platform.desktop};
  }
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
  place-self: center;
  font-size: 30px;
  grid-column: 1 / 7;
`;

const StyledMenu = styled.div`
  grid-column: span 3;
  font-size: 20px;
  align-self: end;
  text-align: center;
  margin: 0 30px 10px 30px;
  border-radius: 30px;
  &:hover {
    color: red;
  }
  &:active {
    color: gray;
  }
`;
const StyledImage = styled.img`
  width: 85px;
  height: 85px;
  border-radius: 50px;
`;
const StyledSetting = styled(Settings)`
  margin-left: 20px;
  &:hover {
    color: gray;
  }

  &:active {
    color: white;
  }
`;

const TopWrapper: React.FC<TopWrapperProps> = ({ type, username }) => {
  return (
    <StyleForm>
      <StyledTop>
        {username} <StyledSetting size={30} />
      </StyledTop>
      {/*<StyledTop>*/}
      {/*  <StyledImage src="https://search.pstatic.net/common/?src=http%3A%2F%2Fkinimage.naver.net%2F20160302_296%2F1456919917013yxvPU_PNG%2F%25BB%25E7%25C4%25ED4.png&type=sc960_832" />*/}
      {/*</StyledTop>*/}
      <StyledMenu>새로 올라온 피드</StyledMenu>
      <StyledMenu>참여중피드</StyledMenu>
    </StyleForm>
  );
};

export default TopWrapper;
