import React from "react";
import styled from "styled-components";

interface ImageInputProps {
    Preview : string;
    onChange : (e: any) => void;
}

const StyledCard = styled.div`
height: 200px;
`;


const ImageInputBox: React.FC<ImageInputProps> = ({Preview,onChange
                            }) => {
    return (
        <StyledCard>
            <img src = {Preview} height='150px'/>
            <p>Drag and Drop</p>
            <text> or</text>
            <label>
                file select
                <input
                    type="file"
                    accept="image/*"
                    onChange={onChange}
                />
            </label>
        </StyledCard>
    );
};

export default ImageInputBox;
