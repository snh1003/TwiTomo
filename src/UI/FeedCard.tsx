import React from "react";
import styled from "styled-components";
import theme from "../theme";
import TagBox from "./Tag";

interface FeedCardProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
  borderRadius?: string;
  margin?: string;
}
// box-shadow: -5px -5px 20px ${theme.main.bright},
//   5px 5px 20px ${theme.main.dark};
const StyledCard = styled.article<
  Pick<FeedCardProps, "width" | "height" | "borderRadius" | "margin">
>`
  display: grid;
  grid-template-rows: refeat(4, 2fr);
  grid-template-columns: repeat(6, 1fr);
  margin-top: 20px;
  box-shadow: 0 3px 5px rgba(0, -1, 0, 0.33);
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: "3px";
`;


const StyledText = styled.text`
  grid-column: span 6;
  margin: 4px 0px 0px 14px;
  font-size: 30px;
`;

const StyledDate = styled.text`
  grid-column: span 6;
  margin: 4px 0px 0px 14px;
  $::before {
    content: "D-1";
  }
`;

const FeedCard: React.FC<FeedCardProps> = ({
  children,
  width,
  height,
  borderRadius,
  margin,
}) => {
  return (
    <StyledCard
      width={width}
      height={height}
      borderRadius={borderRadius}
      margin={margin}
    >
      <TagBox>sd</TagBox> <TagBox>sd</TagBox>{" "}
      <TagBox>sd</TagBox>
      <StyledText>타이틀입니다</StyledText>
      <StyledDate>1일 후 예정</StyledDate>
    </StyledCard>
  );
};

export default FeedCard;
