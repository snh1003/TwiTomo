import React from "react";
import MainWrapper from "../../UI/Wrapper/mainWrapper";
import TopWrapper from "../../UI/Wrapper/TopWrapper";
import MiddleWrapper from "../../UI/Wrapper/MiddleWrapper";
import FeedCard from "../../UI/FeedCard";
import BottomWrapper from "../../UI/Wrapper/BottomWrapper";

const FeedComponent = () => {
    const fakedata = {
        date: "1990-90-90",
        title: "test",
        name: "name"
    };
    return (
        <MainWrapper>
            <TopWrapper>df</TopWrapper>
            <MiddleWrapper> <FeedCard>sdf</FeedCard> <FeedCard>sdf</FeedCard> <FeedCard>sdf</FeedCard> <FeedCard>sdf</FeedCard></MiddleWrapper>
            <BottomWrapper></BottomWrapper>
        </MainWrapper>
    );
};

export default FeedComponent;
