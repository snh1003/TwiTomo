import React from "react";
import MainWrapper from "../UI/mainWrapper";
import TopNav from "../UI/TopNav";
import TimelineBox from "../UI/TimelineBox";
import TitleBar from "../UI/TitleBar";
import CategoryBox from "../UI/CategoryWrapper";
import CategoryContentBox from "../UI/CategoryContent";
const App = () => {
  const fakedata = {
    date: "1990-90-90",
    title: "test",
    name: "name"
  };
  return (
    <>
      <CategoryBox>
        <CategoryContentBox>haha</CategoryContentBox>

        <CategoryContentBox>hahdfasffa</CategoryContentBox>
        <CategoryContentBox>haha</CategoryContentBox>
        <CategoryContentBox>haha</CategoryContentBox>
        <CategoryContentBox>haha</CategoryContentBox>
      </CategoryBox>
      <TopNav></TopNav>
    </>
  );
};

export default App;
