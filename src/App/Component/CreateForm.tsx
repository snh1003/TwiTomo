import React, { ChangeEvent } from "react";
import MainWrapper from "../../UI/Wrapper/mainWrapper";
import MiddleWrapper from "../../UI/Wrapper/MiddleWrapper";
import BottomWrapper from "../../UI/Wrapper/BottomWrapper";
import InputBox from "../../UI/InputBox";
import ImageInputBox from "../../UI/ImageInput";
import TextAreaBox from "../../UI/TextAreaBox";
import { Feed } from "../../ContextProvider";
import Modal from "styled-react-modal";
import TagInput from "../../UI/TagInput";
import TagBox from "../../UI/Tag";
import TagWrapper from "../../UI/Wrapper/TagWrapper";
import axios from "axios";
import { log } from "util";

interface Images {
  file: Blob | null;
  Preview: string;
}
type FeedForm = Partial<Feed>;

const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;`;

const CreateForm = () => {
  const [form, setForm] = React.useState<FeedForm>({
    title: "",
    name: "",
    tag: [],
    location: "",
    day: "",
    money: "0",
    people: "0",
    content: "",
  });
  const [isDrag, setIsDrag] = React.useState(false);
  const [image, setImage] = React.useState<Images>({ file: null, Preview: "" });
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [tagStorage, setTagStorage] = React.useState<string>("");
  const dragState = (e: any, state: boolean) => {
    e.preventDefault();
    setIsDrag(state);
  };

  const handleChangeFile = (files: FileList | null) => {
    if (!files) return;
    const file = files[0];
    (async () => {
      const reader: FileReader = await readerOnloadend(file);
      setImage({ file: file, Preview: reader.result as string });
    })();
  };

  const readerOnloadend = async (data: Blob): Promise<FileReader> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader);
      };
      data ? reader.readAsDataURL(data) : reject();
    });
  };

  const clear = () => {
    setImage({ file: null, Preview: "" });
  };

  const handleChange = (input: string) => (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    input === "tag"
      ? setTagStorage(e.target.value)
      : setForm({ ...form, [input]: e.target.value });

    console.log(form);
  };

  const makeFeed = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", form.title as string);
    formData.append("location", form.location as string);
    formData.append("day", form.day as string);
    formData.append("money", form.money as string);
    formData.append("people", form.people as string);
    formData.append("content", form.title as string);
    form.tag?.forEach((value) => formData.append("tag", value));
    try {
      const response = await axios
        .post(" http://localhost:4000/", formData, {
          headers: { "content-type": "multipart/form-data" },
        })
        .then((res) => console.log(res));
      // dispatch({ type: "SUCCESS", data: response.data });
    } catch (e) {
      console.log(e);
      // dispatch({ type: "ERROR", error: e });
    }
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setForm({ ...form, tag: form.tag?.concat(tagStorage) });
      toggleModal();
    }
  };
  return (
    <form onSubmit={makeFeed}>
      <MainWrapper>
        <MiddleWrapper>
          <div
            data-drag={isDrag}
            onDragEnter={(e) => {
              dragState(e, true);
            }}
            onDragLeave={(e) => {
              dragState(e, false);
            }}
            onDragOver={(e) => {
              dragState(e, true);
            }}
            onDrop={(e) => {
              dragState(e, false);
              handleChangeFile(e.dataTransfer.files);
            }}
          >
            <ImageInputBox
              preview={image.Preview}
              onChange={(e) => handleChangeFile(e.target.files)}
              clear={clear}
            />
          </div>
          <InputBox
            height="50px"
            margin="10px"
            fontsize="30px"
            padding="60px"
            placeholder={"titl"}
            onChange={handleChange("title")}
          />
          <h2 style={{ textAlign: "center" }}>hosting</h2>
          <TagWrapper>
            {form.tag?.map((value, index) => (
              <TagBox key={index}>{value}</TagBox>
            ))}
            {(form.tag?.length as number) <= 2 ? (
              <TagInput onClick={toggleModal} />
            ) : (
              <></>
            )}
          </TagWrapper>
          <StyledModal
            isOpen={isOpen}
            onBackgroundClick={toggleModal}
            onEscapeKeydown={toggleModal}
          >
            <InputBox
              onKeyPress={handleKeyPress}
              padding="16px"
              onChange={handleChange("tag")}
            />
          </StyledModal>
          <InputBox
            margin="10px"
            padding="16px"
            placeholder={"location"}
            onChange={handleChange("location")}
          />
          <InputBox
            padding="16px"
            margin="10px"
            placeholder={"day"}
            onChange={handleChange("day")}
          />
          <InputBox
            padding="16px"
            margin="10px"
            placeholder={"money"}
            onChange={handleChange("money")}
          />
          <InputBox
            padding="16px"
            margin="10px"
            placeholder={"people"}
            onChange={handleChange("people")}
          />
          <h2 style={{ textAlign: "center" }}> 모임정보</h2>
          <TextAreaBox onChange={handleChange("content")} />
        </MiddleWrapper>
        <BottomWrapper />
      </MainWrapper>
    </form>
  );
};

export default CreateForm;
