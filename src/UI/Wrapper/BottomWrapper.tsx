import React from "react";
import styled from "styled-components";
import { Home } from "@styled-icons/boxicons-regular/Home"
import {Pencil} from "@styled-icons/boxicons-solid/Pencil"

interface bottomWrapperProps {
  width?: string;
  height?: string;
  type?: string;
}

const StyleForm = styled.article<Pick<bottomWrapperProps, "width" | "height">>`
  flex: 1 1 10% ;
  display: flex;
  width: 470px;
  justify-content : center;
    align-items: center;
  background: ${(props) => props.theme.main.base};

`;

const FlexHome = styled(Home)`
flex : 1;
color : white;
`
const FlexPencil = styled(Pencil)`
flex : 1;
color : white;
`




const BottomWrapper: React.FC<bottomWrapperProps> = ({
  width,
  height,
  type,
}) => {
  return (
    <StyleForm width={width} height={height}>
      <FlexHome size = "45"/><FlexPencil size = "45"/>
    </StyleForm>
  );
};

export default BottomWrapper;
