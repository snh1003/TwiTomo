import React from "react";
import MainWrapper from "../../UI/Wrapper/mainWrapper";
import YanawaButton from "../../UI/Button";
import TitleLogo from "../../UI/TitleLogo";

const MainTitle = () => {
  return (
    <MainWrapper>
      <TitleLogo />
      <YanawaButton>Start!</YanawaButton>
    </MainWrapper>
  );
};

export default MainTitle;
