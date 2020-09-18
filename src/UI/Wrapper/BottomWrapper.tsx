import React from "react";
import styled from "styled-components";

interface bottomWrapperProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
  type?: string;
}

const StyleForm = styled.article<Pick<bottomWrapperProps, "width" | "height">>`
  flex: 1;
  width: 470px;
  background: blue;
`;

const BottomWrapper: React.FC<bottomWrapperProps> = ({
  children,
  width,
  height,
  type,
}) => {
  return (
    <StyleForm width={width} height={height}>
      {children}
    </StyleForm>
  );
};

export default BottomWrapper;
