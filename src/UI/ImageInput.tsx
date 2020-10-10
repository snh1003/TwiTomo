import React from "react";
import styled from "styled-components";
import { MinusCircle } from "@styled-icons/boxicons-regular/MinusCircle";
import { FileEarmarkArrowUpFill } from "@styled-icons/bootstrap/FileEarmarkArrowUpFill";

interface ImageInputProps {
  preview: string;
  onChange: (e: any) => void;
  clear: () => void;
}

const StyledCard = styled.div`
  text-align: center;
  height: 170px;
  margin: 15px;
  border: dashed;
`;

const StyledImg = styled.img``;

const StyledMinus = styled(MinusCircle)`
  color: blue;
  position: absolute;
  right: 5px;
  width: 30px;
  height: 30px;
`;

const StyledFIleUpload = styled(FileEarmarkArrowUpFill)`
  color: gray;
  margin-top: 22px;
`;

const ImageInputBox: React.FC<ImageInputProps> = ({
  preview,
  onChange,
  clear,
}) => {
  return (
    <StyledCard>
      {preview ? (
        <>
          <StyledImg src={preview} width="100%" height="100%" />{" "}
          <StyledMinus onClick={clear} />
        </>
      ) : (
        <>
          <label>
            <input
              type="file"
              accept="image/*"
              onChange={onChange}
              style={{ display: "none" }}
            />
            <StyledFIleUpload size="110"></StyledFIleUpload>
          </label>
        </>
      )}
    </StyledCard>
  );
};

export default ImageInputBox;
