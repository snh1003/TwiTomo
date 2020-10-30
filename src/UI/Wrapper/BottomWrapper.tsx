import React from "react";
import styled from "styled-components";
import { Home } from "@styled-icons/boxicons-regular/Home";
import { Pencil } from "@styled-icons/boxicons-solid/Pencil";

interface bottomWrapperProps {
  width?: string;
  height?: string;
  type?: boolean;
  fnc?: () => void;
}

const StyleForm = styled.article<Pick<bottomWrapperProps, "width" | "height">>`
  flex: 1 0 15%;
  display: flex;
  width: ${(props) => props.theme.Platform.mobile};
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.main.base};

  @media only screen and (min-width: ${(props) =>
      props.theme.Platform.desktop}) {
    width: ${(props) => props.theme.Platform.desktop};
  }
`;

const FlexHome = styled(Home)`
  flex: 1;
  color: white;
  &:hover {
    color: gray;
  }
`;

const FlexButton = styled.button`
  flex: 1;
  background-color: transparent;
  border: 0px transparent solid;
  outline: 0;
`;
const FlexPencil = styled(Pencil)`
  color: white;
  &:hover {
    color: gray;
  }
`;

const BottomWrapper: React.FC<bottomWrapperProps> = ({
  width,
  height,
  type,
  fnc,
}) => {
  return (
    <StyleForm width={width} height={height}>
      {type ? (
        <FlexPencil size="45" onClick={fnc} />
      ) : (
        <>
          <FlexHome size="45" onClick={() => alert("haha")} />
          <FlexButton type="submit">
            <FlexPencil size="45" onClick={fnc} />
          </FlexButton>
        </>
      )}
    </StyleForm>
  );
};

export default BottomWrapper;
