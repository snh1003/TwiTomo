import React, { ChangeEvent, useEffect } from "react";
import MainWrapper from "../../UI/Wrapper/mainWrapper";
import MiddleWrapper from "../../UI/Wrapper/MiddleWrapper";
import BottomWrapper from "../../UI/Wrapper/BottomWrapper";
import InputBox from "../../UI/InputBox";
import ImageInputBox from "../../UI/ImageInput";
import TextAreaBox from "../../UI/TextAreaBox";
import { Feed, useProfileState } from "../../Context/ProfileContext";
import TagBox from "../../UI/Tag";
import TagWrapper from "../../UI/Wrapper/TagWrapper";
import { RouteComponentProps } from "react-router-dom";
import axios from "axios";

type FeedForm = Partial<Feed>;

interface FeedDetailProps extends RouteComponentProps<{ id: string }> {}
const FeedDetail: React.FC<FeedDetailProps> = (props) => {
  const [form, setForm] = React.useState<FeedForm>();

  const getFeedOne = async () => {
    await axios
      .get(`https://localhost:80/${props.match.params.id}`)
      .then((res) => {
        setForm(res.data);
      })
      .catch((e) => {
        console.log(e);
        throw new Error(e);
      });
  };

  useEffect(() => {
    getFeedOne();
    console.log(form);
  }, []);
  return (
    <MainWrapper>
      <MiddleWrapper>
        <div>
          <ImageInputBox
            preview={
              "https://localhost:80/20201026140332_2020.10.24%20PC%EA%B2%AC%EC%A0%81.png"
            }
          />
        </div>
        <InputBox
          height="50px"
          margin="10px"
          fontsize="30px"
          padding="60px"
          disabled={true}
          value={form?.title}
        />
        <h2 style={{ textAlign: "center" }}>hosting</h2>
        <TagWrapper>
          {form?.tag?.map((value, index) => (
            <TagBox key={index}>{value}</TagBox>
          ))}
        </TagWrapper>
        <InputBox
          margin="10px"
          padding="16px"
          disabled={true}
          value={form?.location}
        />
        <InputBox
          padding="10px"
          margin="16px"
          disabled={true}
          value={form?.day}
        />
        <InputBox
          padding="16px"
          margin="10px"
          disabled={true}
          value={form?.money}
        />
        <InputBox
          padding="16px"
          margin="10px"
          disabled={true}
          value={form?.people}
        />
        haha
        <h2 style={{ textAlign: "center" }}> 모임정보</h2>
        <TextAreaBox disabled={true} value={form?.content} />
      </MiddleWrapper>
      <BottomWrapper type={true} />
    </MainWrapper>
  );
};

export default FeedDetail;
