import React from 'react';
import styled from 'styled-components';
import MemoItem from './memoItem';

const MemoListBlock = styled.div`
    width: 460px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
`

function MemoList({memos,memoBinding}){
    return (
        <MemoListBlock>
            {memos.map(memo => 
                <MemoItem memoBinding={memoBinding} memo={memo}></MemoItem>
            )}
        </MemoListBlock>
    )
}

export default MemoList;