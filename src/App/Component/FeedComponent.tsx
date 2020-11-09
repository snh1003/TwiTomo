import React, { useEffect } from "react";
import MainWrapper from "../../UI/Wrapper/MainWrapper";
import TopWrapper from "../../UI/Wrapper/TopWrapper";
import MiddleWrapper from "../../UI/Wrapper/MiddleWrapper";
import FeedCard from "../../UI/FeedCard";
import BottomWrapper from "../../UI/Wrapper/BottomWrapper";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";
import { throttle } from "lodash";

import {
  Dispatcher,
  Feed,
  useDispatch,
  useProfileState,
} from "../../Context/ProfileContext";
import { Link } from "react-router-dom";

const FeedComponent = () => {
  const state = useProfileState();
  const dispatch = useDispatch();
  const [feedData, setFeedData] = React.useState<Feed[]>([]);

  const getParameter = (param: string) => {
    param = param.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    const regex = new RegExp("[\\?&]" + param + "=([^&#]*)"),
      results = regex.exec(window.location.search);
    return results == null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  };

  const getToken = async () => {
    const tokenCode = getParameter("code");
    const formdata = new URLSearchParams();
    formdata.append("client_id", process.env.REACT_APP_INSTAGRAM_ID as string);
    formdata.append(
      "client_secret",
      process.env.REACT_APP_INSTAGRAM_SECRET as string
    );
    formdata.append("grant_type", "authorization_code");
    formdata.append("redirect_uri", "https://localhost:3000/feed");
    formdata.append("code", tokenCode);

    try {
      const token = await axios
        .post("https://api.instagram.com/oauth/access_token", formdata)
        .then((res) => {
          return JSON.parse(JSON.stringify(res.data.access_token));
        });
      return token;
    } catch (e) {
      dispatch({ type: "GET_PROFILE_ERROR", error: e });
    }
  };

  const getProfile = async (dispatch: Dispatcher, token: string) => {
    dispatch({ type: "GET_PROFILE" });
    try {
      const response = await axios
        .get(
          `https://graph.instagram.com/me?fields=id,username&access_token=${token}`
        )
        .then((res) => JSON.parse(JSON.stringify(res.data)));
      dispatch({ type: "GET_PROFILE_SUCCESS", data: response });
    } catch (e) {
      dispatch({ type: "GET_PROFILE_ERROR", error: e });
    }
  };

  const getFeed = async () => {
    await axios
      .get(`https://localhost:80/?limit=${feedData.length + 10}`)
      .then((res) => {
        setFeedData(res.data);
      })
      .catch((e) => {
        console.log(e);
        throw new Error(e);
      });
  };

  // const getFeedOne = async (id: number) => {};

  const delayedQuery = React.useCallback(throttle(getFeed, 1500), [
    feedData.length,
  ]);

  useEffect(() => {
    // getToken().then((r) => getProfile(dispatch, r));
    getFeed();
  }, []);

  return (
    <MainWrapper>
      <TopWrapper username={state.data?.username} />
      <MiddleWrapper>
        <InfiniteScroll
          pageStart={0}
          loadMore={delayedQuery}
          hasMore={false}
          useWindow={false}
          loader={
            <div key="loading" className="loader">
              Loading ...
            </div>
          }
        >
          {feedData?.map((value) => {
            return (
              <Link
                to={`/feedDetail/${value.id}`}
                style={{ textDecoration: "none" }}
              >
                <FeedCard
                  key={value.id}
                  title={value.title}
                  tag={value.tag}
                  day={value.day}
                />
              </Link>
            );
          })}
        </InfiniteScroll>
      </MiddleWrapper>
      <BottomWrapper />
    </MainWrapper>
  );
};

export default FeedComponent;
