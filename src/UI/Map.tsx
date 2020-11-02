import React from "react";
import styled from "styled-components";

interface MapContentProps {
  Value: {
    date: String;
    title: String;
    name: String;
  };
}

const StyledBox = styled.div`
  width: 100px;
  border-top: thin solid #bcbcbc;
`;

const MapBox: React.FC<MapContentProps> = ({ Value }) => {
  return (
    <StyledBox>
      <h2>{Value.date}</h2>
    </StyledBox>
  );
};

export default MapBox;
