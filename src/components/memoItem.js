import React from 'react';
import styled from 'styled-components';
import {getCreatedAt} from '../lib/dateUtil'

const MemoItemBlock = styled.div`
    height:98px;
    background: #1c1d1f;
    &:hover {
        background: #27282c;
        border-left: 4px solid gray;
    }
    padding: 20px;
    border: 1px solid rgba(0,0,0,1);
    display: flex;
    h1,p {
        margin: 0
    }
    h1 {
        font-size: 20px;
        margin-bottom: 10px;
        color: #9fa9ab;
    }
    p {
        color: #525254;
        font-weight: 700;
        font-size: 16px;
    }
`




function MemoItem({memo, getItem, onChangeSelectedMemo}){
    const {id, Title, Content, createdAt} = memo;


    return (
        <MemoItemBlock onClick={()=>{getItem(id); onChangeSelectedMemo(memo);}}>
            <div className="AfterTime">{getCreatedAt(createdAt)}</div>
            <div>
                <h1>{memo.Title}</h1>
                <p>{memo.Content}</p>
            </div>
        </MemoItemBlock>
    )
}

export default MemoItem;