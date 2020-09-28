import React from "react";
import MainWrapper from "../../UI/Wrapper/mainWrapper";
import MiddleWrapper from "../../UI/Wrapper/MiddleWrapper";
import BottomWrapper from "../../UI/Wrapper/BottomWrapper";
import InputBox from "../../UI/InputBox";

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
            reader.readAsDataURL(data)
        })
    }
    return (
        <MainWrapper>
            <MiddleWrapper>
                <img src = {image.Preview}/>
                <div
                    className="area"
                    data-drag={isDrag}
                    onDragEnter={e => {dragState(e, true)}}
                    onDragLeave={e => {dragState(e, false)}}
                    onDragOver={e => {dragState(e, true)}}
                    onDrop={e => {
                        dragState(e, false);
                        handleChangeFile(e.dataTransfer.files);
                    }}
                >
                    <p>Drag and Drop</p>
                    <span> or</span>
                    <label>
                        file select
                        <input
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={e => handleChangeFile(e.target.files)}
                        />
                    </label>
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
