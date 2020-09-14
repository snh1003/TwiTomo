import React from "react";
import styled from "styled-components"

interface TitleBarProps {

}

const StyledTitleBar = styled.div`
font-weight: bold;
    font-size: 14px;
    color: #fff;
    background: #4ba1e4;
    margin-bottom: 10px;
    padding: 4px 6px;
    position: relative;
    display: block;
    border-left: thin #08c solid;
    border-bottom: thin #08c solid;
    border-radius: 2px;
    
    &::before {
    border-bottom: solid 7px transparent;
    content: '';
    position: absolute;
    top: 100%;
    border-right: solid 12px #06a;
    left: 0;
    }
    
`


const TitleBar: React.FC = () => {

    return (
        <StyledTitleBar>
            TestText bar
        </StyledTitleBar>
    )

}

export default TitleBar