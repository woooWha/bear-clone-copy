import React from 'react';
import styled from 'styled-components';
import { MdSearch } from "react-icons/md";
import { MdCreate } from "react-icons/md";


const SearchAndAddBlock = styled.div`
    width: 440px;
    background: #191919;
    padding: 10px 10px;
    display: flex;
    align-items: center;
    border-right: 1px solid black;
`;

const SearchBlock = styled.input`
    width:100%;
    height: 40px;
    background: #222627;
    font-size: 16px;
    color: gray;
    border-radius: 8px;
    text-align: left;
    box-sizing: border-box;
    margin-right: 10px;
    outline: none;
    border: 1px solid rgba(100,100,100,0.4);
`

const SearchAddBlock = styled.div`
    cursor: pointer;
    font-size: 24px;
    color: white;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
    border-radius: 8px;
`




function SearchAndAdd ({addMemo}) {
    return (
        <SearchAndAddBlock>
            <SearchBlock placeholder='🔎메모 검색'></SearchBlock>
            <SearchAddBlock onClick={()=>addMemo(new Date().getTime())}><MdCreate/></SearchAddBlock> 
        </SearchAndAddBlock>
    )
}

export default SearchAndAdd; 