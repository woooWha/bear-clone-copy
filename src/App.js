import './App.css';
import SearchAndAdd from './components/search-and-add';
import MemoList from './components/memoList';
import React, { useState, useEffect } from 'react';
import NewMemo from './components/newMemo';
import dayjs from 'dayjs';
import { getCreatedAt } from './lib/dateUtil';

let nextId = 2;
function App() {
  const [memos,setmemo] = useState([{
    id:1,
    Title:'베어에 환영합니다.',
    Content:'베어는 메모와 산문을 작성할 수 있는 아름답고 편리한 앱입니다.',
    createdAt: new Date()
  }
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
        createdAt: dayjs()
      }
      setmemo(memos.concat(memo));
      nextId++;
    }

  // 내용 업데이트
    const onUpdate = (id,Title,Content) => {
      setmemo(memos=>
        memos.map(memo => (memo.id ===id ? {...memo,Title, Content}: memo)));
    }



  return (
    <div className="App">
      <div>
        <SearchAndAdd addmemo={addmemo}></SearchAndAdd>
        <MemoList onChangeSelectedMemo={onChangeSelectedMemo} memos={memos} getItem={getItem}></MemoList>
      </div>

      <NewMemo selectedMemo={selectedMemo} onUpdate={onUpdate} setmemo={setmemo} AddMeme={addmemo} memos={memos} 아이디={아이디}></NewMemo>
    </div>
  );
}


export default App;
