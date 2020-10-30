import React from "react";
import MainWrapper from "../../UI/Wrapper/mainWrapper";
import YanawaButton from "../../UI/Button";
import TitleLogo from "../../UI/TitleLogo";

const MainTitle = () => {
  const clickEvent = () => {
    window.location.href = `https://api.instagram.com/oauth/authorize?client_id=${process.env.REACT_APP_INSTAGRAM_ID}&redirect_uri=https%3A%2F%2Flocalhost%3A3000%2Ffeed&scope=user_profile,user_media&response_type=code`;
  };

  return (
    <MainWrapper>
      <TitleLogo />
      <YanawaButton onClick={clickEvent}>Start!</YanawaButton>
    </MainWrapper>
  );
};

export default MainTitle;
