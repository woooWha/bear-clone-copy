import React, { useState } from 'react';
import styled from 'styled-components';


const NewMemoBlock= styled.form`
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
    input::placeholder {
    color: white;
    text-align: left;
    }
`

function NewMemo({memos, 아이디, onUpdate, onUpdate2}){

    const[value,setValue] = useState('');
    const[value2,setValue2] =useState('');
    const onChange = e => setValue(e.target.value);
    const onChange2 = e => setValue2(e.target.value);

    const onSubmit = e => {
        e.preventDefault();
        onUpdate(아이디+1, value);
        onUpdate2(아이디+1, value2);
    }

    return (
    <>
        <NewMemoBlock onSubmit={onSubmit}>
            <span className="bigPosition">H1</span>

            <input value={value} onChange={onChange} className="big" placeholder={memos[아이디].Title}></input>
            <textarea  value={value2} onChange={onChange2} placeholder={memos[아이디].Content}></textarea>
        </NewMemoBlock>  
    </>
    )
}

export default NewMemo;