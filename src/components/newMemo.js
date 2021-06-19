import React from 'react';
import styled from 'styled-components';


const NewMemoBlock= styled.div`
    width: 100%;
    height: 100%;
    padding: 50px 90px;
    display: flex;
    flex-direction: column;
    position: relative;
    input.big {
        margin-bottom: 40px;
        font-size: 32px;
        text-align: left;
        background: #1c1d1f;
        color: white;
        outline: none;
        border: 0;
    }
    textarea {
        background: #1c1d1f;
        color: white;
        text-align: left;
        font-size: 20px;
        outline: none;
        height: 100vh;
        border: 0;
        overflow: auto;
    }
    .bigPosition {
        position: absolute;
        left: 60px;
        top: 60px;
        color: rgba(100,100,100,0.4);
    }
`

function NewMemo(){
    return (
        <NewMemoBlock>
            <span className="bigPosition">H1</span>
            <input className="big" placeholder="New Memo Title"></input>
            <textarea></textarea>
        </NewMemoBlock>
    )
}

export default NewMemo;