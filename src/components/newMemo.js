import React, { useEffect, useState } from 'react';
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

function NewMemo({timeArray,memos, 아이디, selectedMemo, onUpdate}){

    const [value,setValue] = useState('');
    const [value2,setValue2] = useState(''); 
    const onChange = e => {
        setValue(e.target.value)
    }
    const onChange2 = e => {
        setValue2(e.target.value)
    }
    const onSubmit = e => {
        e.preventDefault();
        onUpdate(selectedMemo.id,value,value2,new Date());
        timeArray();
    }

    useEffect(()=> {
        if(selectedMemo){
            setValue(selectedMemo.Title);
            setValue2(selectedMemo.Content);
        }
    },[selectedMemo])

    return (
        <NewMemoBlock onSubmit={onSubmit} >
            <span className="bigPosition">H1</span>
            <input className="big" value={value} onChange={onChange} placeholder={''}></input>
            <textarea value={value2} onChange={onChange2} placeholder={''}></textarea>
        </NewMemoBlock>  
    )
}

export default NewMemo;