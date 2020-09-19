import React from "react";
import styled from "styled-components";
import theme from "../theme";

interface TagProps {
    children: React.ReactNode;
}
// box-shadow: -5px -5px 20px ${theme.main.bright},
//   5px 5px 20px ${theme.main.dark};


const StyledTag = styled.article`
  text-align: center;
  border-radius: 8px;
  background: red;
  margin: 3px;
`;

const TagBox: React.FC<TagProps> = ({
                                               children
                                           }) => {
    return (
            <StyledTag>{children}</StyledTag>
    );
};

export default TagBox;
