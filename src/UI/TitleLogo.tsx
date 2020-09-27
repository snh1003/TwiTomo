import React from "react";
import styled from "styled-components";
import noname from "../img/noname.png"


const StyledLogo = styled.img`
height: 50%;
margin-top: 10%;
    `

const TitleLogo:React.FC = () => {
    return(
    <StyledLogo src = {noname}/>
    )
}

export default TitleLogo