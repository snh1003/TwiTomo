import React from "react";
import MainWrapper from "../UI/mainWrapper";
import TopNav from "../UI/TopNav";

import CategoryBox from "../UI/CategoryWrapper";
import CategoryContentBox from "../UI/CategoryContent";
import FeedCardView from "./Component/FeedCardComponent";
import ContentBox from "../UI/ContentBox";
const App = () => {
  const fakedata = {
    date: "1990-90-90",
    title: "test",
    name: "name"
  };
  return (

      <MainWrapper>
      <CategoryBox>
        <CategoryContentBox Value={fakedata}></CategoryContentBox>
        <CategoryContentBox Value={fakedata}></CategoryContentBox>
        <CategoryContentBox Value={fakedata}></CategoryContentBox>
        <CategoryContentBox Value={fakedata}></CategoryContentBox>
        <CategoryContentBox Value={fakedata}></CategoryContentBox>
        <FeedCardView></FeedCardView>
        <ContentBox></ContentBox>
      </CategoryBox>
      <TopNav></TopNav>
        </MainWrapper>
  );
};

export default App;
