import React from "react";
import styled from "styled-components";

interface MapContentProps {
  Value: {
    data: String;
  };
}

const StyledBox = styled.div`
  width: 100px;
  border-top: thin solid #bcbcbc;
`;

const MapBox: React.FC<MapContentProps> = ({ Value }) => {
  return (
    <StyledBox>
      <h2>{Value.data}</h2>
    </StyledBox>
  );
};

export default MapBox;
