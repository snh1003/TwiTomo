import React, { useEffect } from "react";
import MainWrapper from "../../UI/Wrapper/mainWrapper";
import TopWrapper from "../../UI/Wrapper/TopWrapper";
import MiddleWrapper from "../../UI/Wrapper/MiddleWrapper";
import FeedCard from "../../UI/FeedCard";
import BottomWrapper from "../../UI/Wrapper/BottomWrapper";
import axios from "axios";

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

  const getParameterByName = (name: string) => {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    const regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(window.location.search);
    return results == null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  };

  const getToken = async () => {
    const tokenCode = getParameterByName("code");
    const formdata = new URLSearchParams();
    formdata.append("client_id", "884820475384123");
    formdata.append("client_secret", "df63c18525f145a62ed77e965e152c25");
    formdata.append("code", tokenCode);
    formdata.append("grant_type", "authorization_code");
    formdata.append("redirect_uri", "https://localhost:3000/main");
    await axios
      .post("/oauth/access_token", formdata)
      .then((res) => console.log("res" + res));
  };

  return (
    <MainWrapper>
      <TopWrapper>df</TopWrapper>
      <MiddleWrapper>
        <button onClick={getToken}>haha</button>
        {fakeData.map((value) => {
          return (
            <FeedCard
              key={value.id}
              title={value.title}
              tag={value.tag}
              dday={value.dday}
            />
          );
        })}
      </MiddleWrapper>
      <BottomWrapper></BottomWrapper>
    </MainWrapper>
  );
};

export default FeedComponent;
