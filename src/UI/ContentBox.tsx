import React from "react";
import styled from "styled-components";

interface ContentBoxProps {
    type? : string;
    value? : string;
}

const StyledBox = styled.input`
  width: 120px;
  border: solid thin;
  border-radius: 5px;
  box-shadow: 2px 2px 1px 0px rgba(0, 0, 255, 0.2);
`;

const ContentBox: React.FC<ContentBoxProps> = ({ type,value }) => {
    return <StyledBox></StyledBox>;
};

export default ContentBox