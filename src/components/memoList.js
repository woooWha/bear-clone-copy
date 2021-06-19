import React from 'react';
import styled from 'styled-components';
import MemoItem from './memoItem';

const MemoListBlock = styled.div`
    width: 460px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    background: rgba(0,0,0,0.9);
    color: white;
`

function MemoList({memos}){
    return (
        <MemoListBlock>
            {memos.map(memo => 
                <MemoItem memo={memo}></MemoItem>
            )}
        </MemoListBlock>
    )
}

export default MemoList;