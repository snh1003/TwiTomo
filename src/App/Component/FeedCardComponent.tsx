import React from "react";
import styled from "styled-components";
import FeedCard from "../../UI/FeedCard";
import { HeadInput } from "../../UI/Typography";

const DisplayWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 0 3rem;
`;

const Title = styled.div`
  top: 30px;
  left: 30px;
`;

const CardContent = styled.div`
  width: 550px;
  height: 40px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const FeedCardView = () => {
  return (
    <DisplayWrapper>
      <FeedCard width="410px" height="40px">
        <Title>
          <HeadInput>title</HeadInput>
        </Title>
        <CardContent>
          <HeadInput>body</HeadInput>
        </CardContent>
      </FeedCard>
    </DisplayWrapper>
  );
};

export default FeedCardView;
