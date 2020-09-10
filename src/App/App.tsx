import React from "react";
import { Button } from "../UI/Button";
import FeedCard from "../UI/FeedCard";
import BottomNav from "../UI/BottomNav";
import FeedCardView from "./Component/FeedCardComponent";
import MainWrapper from "../UI/mainWrapper";

const App = () => {
  return (
    <>
      <MainWrapper>
        <FeedCardView></FeedCardView>
        <FeedCardView></FeedCardView>
        <FeedCardView></FeedCardView>
      </MainWrapper>
    </>
  );
};

export default App;
