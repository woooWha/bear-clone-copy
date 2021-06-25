import './App.css';
import SearchAndAdd from './components/search-and-add';
import MemoList from './components/memoList';
import React, { useState, useEffect } from 'react';
import NewMemo from './components/newMemo';
import dayjs from 'dayjs';
import { getCreatedAt } from './lib/dateUtil';

let nextId = 1;
function App() {
  const [memos,setmemo] = useState([
  ]); 
  const[selectedMemo,setSelectedMemo] = useState(null);


  const onChangeSelectedMemo = memo => {
    setSelectedMemo(memo);
  }


 // 메모 내용을 우측 스크린에 띄우기
  const [아이디,set아이디] = useState(0);
  const getItem = id => {
    set아이디(id-1)
  }


  // 메모의 시간순 정렬 및 메모 등록

  const addmemo = () => {
    const memo = {
        id: nextId,
        Title: '멋진 새 메모',
        Content: '편안하게 무언가 적어보세요',
        createdAt: new Date()
      }
      setmemo(memos.concat(memo));
      nextId++;
    }

  // 내용 업데이트
    const onUpdate = (id,Title,Content,createdAt) => {
      setmemo(memos=>
        memos.map(memo => (memo.id ===id ? {...memo,Title, Content,createdAt}: memo)));
    }

  // 시간순 정렬
    const timeArray = () =>
      setmemo(memos => memos.sort((a,b) => {return b.createdAt - a.createdAt}))



  return (
    <div className="App">
      <div>
        <SearchAndAdd timeArray={timeArray} addmemo={addmemo}></SearchAndAdd>
        <MemoList onChangeSelectedMemo={onChangeSelectedMemo} memos={memos} getItem={getItem}></MemoList>
      </div>

      <NewMemo timeArray={timeArray} selectedMemo={selectedMemo} onUpdate={onUpdate} setmemo={setmemo} AddMeme={addmemo} memos={memos} 아이디={아이디}></NewMemo>
    </div>
  );
}


export default App;
