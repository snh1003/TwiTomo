import React from "react";
import styled from "styled-components";

interface TopNavProps {

}

const StyledUl = styled.ul<TopNavProps>`
overflow:hidden;
margin:20px 0;
border-left:1px solid #ddd;
`

const TopNavlist = styled.li `
float:left;
text-align:center;
color:#333;
width:155px;
font-size:12px;
display:block;
padding:5px 0;
border-right:1px solid #ddd;
text-decoration:none;
`

const TopNav: React.FC<TopNavProps> = ({

}) => {
    return(
    <StyledUl>
        <TopNavlist> haha </TopNavlist>
        <TopNavlist> haha </TopNavlist>
        <TopNavlist> haha </TopNavlist>
        <TopNavlist> haha </TopNavlist>
    </StyledUl>
    )
}


export default TopNav