import React from "react";
import styled from "styled-components";
import { Plus } from "@styled-icons/boxicons-regular/Plus";

interface TagInputProps {
  onClick?: () => void;
}
// box-shadow: -5px -5px 20px ${theme.main.bright},
//   5px 5px 20px ${theme.main.dark};

const StyledTagInput = styled.div`
  text-align: center;
  border-radius: 8px;
  margin: 3px 3px 3px 14px;
  box-shadow: 0 0.8px gray;
  box-sizing: border-box;
  border: ${(props) => "thick double " + props.theme.main.base};
  width: 59px;
  height: 20px;
  color: white;
  &:hover {
    box-shadow: 0 0.8px 5px gray;
    border-color: purple;
  }
`;
const StyledPlus = styled(Plus)`
  color: ${(props) => props.theme.main.base};
  text-align: center;
  position: relative;
  bottom: 6px;
  ${StyledTagInput}:hover & {
    color: purple;
  }
`;

const TagInput: React.FC<TagInputProps> = ({ onClick }) => {
  return (
    <StyledTagInput onClick={onClick}>
      <StyledPlus size="19" />
    </StyledTagInput>
  );
};

export default TagInput;
