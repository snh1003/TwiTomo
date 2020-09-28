import React from "react";
import styled from "styled-components";
import {MinusCircle} from "@styled-icons/boxicons-regular/MinusCircle"

interface ImageInputProps {
    preview : string;
    onChange : (e: any) => void;
    clear : () => void;
}

const StyledCard = styled.div`
text-align: center;
height: 200px;
`;

const StyledImg = styled.img`
 outline: none !important;
 border: none !important;
`
const StyledSpace = styled.div`
width: 70%;
height: 70%;
`
const StyledMinus = styled(MinusCircle)`
color: blue;
position: absolute;
right: 5px;
width: 30px;
height: 30px;
`

const ImageInputBox: React.FC<ImageInputProps> = ({preview,onChange, clear
                            }) => {
    return (
        <StyledCard>
            {preview ? <><StyledImg src = {preview} width = '100%' height = '100%'/> <StyledMinus onClick={clear}/></>:
                <>
                <p>Drag and Drop</p>
                <label>
                file select
                <input
                type="file"
                accept="image/*"
                onChange={onChange}
                />
                </label></>}

        </StyledCard>
    );
};

export default ImageInputBox;
