import React from "react";
import MainWrapper from "../../UI/Wrapper/mainWrapper";
import MiddleWrapper from "../../UI/Wrapper/MiddleWrapper";
import BottomWrapper from "../../UI/Wrapper/BottomWrapper";
import InputBox from "../../UI/InputBox";
import ImageInputBox from "../../UI/ImageInput";

interface Images {
    file:Blob | null,
    Preview: string;
}

const CreateForm = () => {
    const [isDrag, setIsDrag] = React.useState(false);
    const [image, setImage] = React.useState<Images>({file:null, Preview:''});
    const dragState = (e :any, state : boolean) => {
        e.preventDefault();
        setIsDrag(state)
    }


    const handleChangeFile =(files:FileList | null) => {
        if(!files) return;
        const file = files[0];
        (async () => {
            const reader :FileReader = await readerOnloadend(file)
            setImage({file:file, Preview:reader.result as string});
        })();
    };

    const readerOnloadend = async (data: Blob): Promise<FileReader> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                resolve(reader)
            };
            data ? reader.readAsDataURL(data) : reject()
        })
    }

    const clear = () => {
        setImage({file: null, Preview:''});
    };
    return (
        <MainWrapper>
            <MiddleWrapper>
                <div
                    data-drag={isDrag}
                    onDragEnter={e => {dragState(e, true)}}
                    onDragLeave={e => {dragState(e, false)}}
                    onDragOver={e => {dragState(e, true)}}
                    onDrop={e => {
                        dragState(e, false);
                        handleChangeFile(e.dataTransfer.files);
                    }}
                >
                    <ImageInputBox preview={image.Preview} onChange={e => handleChangeFile(e.target.files)} clear={clear}/>
                </div>
                <InputBox margin="10px"></InputBox> 
                <InputBox margin="10px"></InputBox>
                <InputBox margin="10px"></InputBox>
                <InputBox margin="10px"></InputBox>
            </MiddleWrapper>
            <BottomWrapper></BottomWrapper>
        </MainWrapper>
    );
};

export default CreateForm;
