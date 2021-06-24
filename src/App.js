import './App.css';
import SearchAndAdd from './components/search-and-add';
import MemoList from './components/memoList';
import { useState } from 'react';
import NewMemo from './components/newMemo';

let nextId = 2;
function App() {
  const [memos,setmemo] = useState([{
    id:1,
    Title:'베어에 환영합니다.',
    Content:'베어는 메모와 산문을 작성할 수 있는 아름답고 편리한 앱입니다.',
    Time: 0
  }
  ]); 

 // 메모 내용을 우측 스크린에 띄우기
  const [아이디,set아이디] = useState(0);
  const getItem = id => {
    set아이디(id-1)
  }


  // 메모의 시간순 정렬 및 메모 등록
  const[시간,set시간] = useState([])


  const addmemo = (data) => {

    const now = data
    set시간(시간.concat(now))
    console.log(시간)
    const memo = {
        id: nextId,
        Title: '멋진 새 메모',
        Content: '편안하게 무언가 적어보세요',
        Time: 0
      }
      setmemo(memos.concat(memo))
      nextId++;
    }

  // 내용 업데이트
  const onUpdate = (id, Title) => {
    {memos.map(memo => (memo.id===id ? {...memo, Title}: memo))}
  }

  const onUpdate2 = (id, Content) => {
    {memos.map(memo => (memo.id===id ? {...memo, Content}: memo))}
  }

  return (
    <div className="App">
      <div>
        <SearchAndAdd addmemo={addmemo}></SearchAndAdd>
        <MemoList memos={memos} getItem={getItem}></MemoList>
      </div>

      <NewMemo onUpdate={onUpdate} onUpdate2={onUpdate2} setmemo={setmemo} AddMeme={addmemo} memos={memos} 아이디={아이디}></NewMemo>
    </div>
  );
}


export default App;
