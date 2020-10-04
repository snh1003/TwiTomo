import React from "react";
import MainWrapper from "../../UI/Wrapper/mainWrapper";
import TopWrapper from "../../UI/Wrapper/TopWrapper";
import MiddleWrapper from "../../UI/Wrapper/MiddleWrapper";
import FeedCard from "../../UI/FeedCard";
import BottomWrapper from "../../UI/Wrapper/BottomWrapper";

const FeedComponent = () => {
  const fakeData = [
    {
      id: 1,
      title: "오프모임",
      tag: ["kim", "park", "hong"],
      dday: 3,
    },
    {
      id: 2,
      title: "오프모임",
      tag: ["kim", "park", "hong"],
      dday: 3,
    },
    {
      id: 3,
      title: "오프모임",
      tag: ["kim", "park", "hong"],
      dday: 3,
    },
    {
      id: 4,
      title: "오프모임",
      tag: ["kim", "park", "hong"],
      dday: 3,
    },
    {
      id: 5,
      title: "오프모임",
      tag: ["kim", "park", "hong"],
      dday: 3,
    },
    {
      id: 6,
      title: "오프모임",
      tag: ["kim", "park", "hong"],
      dday: 3,
    },
  ];
  return (
    <MainWrapper>
      <TopWrapper>df</TopWrapper>
      <MiddleWrapper>
        {fakeData.map((value) => {
          return (
            <FeedCard
              key={value.id}
              title={value.title}
              tag={value.tag}
              dday={value.dday}
            ></FeedCard>
          );
        })}
      </MiddleWrapper>
      <BottomWrapper></BottomWrapper>
    </MainWrapper>
  );
};

export default FeedComponent;
