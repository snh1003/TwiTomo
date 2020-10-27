import React from "react";
import styled from "styled-components";
import TagBox from "./Tag";

interface FeedCardProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  margin?: string;
  tag: string[];
  title: string;
  day: string;
  onClick?: () => void;
}
// box-shadow: -5px -5px 20px ${theme.main.bright},
//   5px 5px 20px ${theme.main.dark};
const StyledCard = styled.article<
  Pick<FeedCardProps, "width" | "height" | "borderRadius" | "margin">
>`
  display: grid;
  grid-template-rows: refeat(4, 2fr);
  grid-template-columns: repeat(6, 1fr);
  align-content: center;
  margin: 10px 0 10px 0;
  box-shadow: 0 3px 5px rgba(0, -1, 0, 0.33);
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: "3px";
  padding: 7px;
  background: white;
  &:hover {
    box-shadow: 0 0.8px 5px gray;
  }
  &:active {
    box-shadow: inset 0 1px gray;
  }
`;

const StyledText = styled.text`
  grid-column: span 6;
  margin: 4px 0px 0px 45px;
  font-size: 22px;
  color: ${(props) => props.theme.main.base};
`;

const StyledDate = styled.text`
  grid-column: span 6;
  margin: 4px 0px 0px 14px;
  color: ${(props) => props.theme.main.base};
  &::before {
    content: "D-1 ";
  }
`;

const FeedCard: React.FC<FeedCardProps> = ({
  width,
  height,
  borderRadius,
  margin,
  title,
  day,
  tag,
  onClick,
}) => {
  return (
    <StyledCard
      width={width}
      height={height}
      borderRadius={borderRadius}
      margin={margin}
      onClick={onClick}
    >
      {tag.map((value) => {
        return <TagBox>{value}</TagBox>;
      })}
      <StyledText>{title}</StyledText>
      <StyledDate>남았습니다. </StyledDate>
    </StyledCard>
  );
};

export default FeedCard;
