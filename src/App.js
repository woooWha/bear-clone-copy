import logo from './logo.svg';
import './App.css';
import SearchAndAdd from './components/search-and-add';
import MemoList from './components/memoList';
import { useState } from 'react';
import NewMemo from './components/newMemo';


function App() {
  const [memos,setmemo] = useState([{
    id:1,
    Title:'베어에 환영합니다.',
    Content:'베어는 메모와 산문을 작성할 수 있는 아름답고 편리한 앱입니다.',
    Time: '2'
  },
  {
    id:2,
    Title:'멋진 새 메모',
    Content:'편안하게 무언가 적어보세요.',
    Time: '4'
  }
  ]);

 let nextId = 3;

  const [아이디,set아이디] = useState(0);

  const getItem = id => {
    set아이디(id-1)
  }

//3. memoItem  등록한 시간이후 지난 시간이 적혀 있고, 새메모 버튼을 클릭하면 지난 시간이 업데이트 된다.  Time= (현재시간.getTime - 게시물의 등록(클릭)지점의 시간.getTime)/1000
 const addMemo = (data) => {
 const memo ={
     id: nextId,
     Title: '멋진 새 메모',
     Content: '편안하게 무언가 적어보세요',
     Time: (new Date().getTime() - data)
   }
   setmemo(memos.concat(memo))
   nextId++
 }



  return (
    <div className="App">
      <div>
        <SearchAndAdd addMemo={addMemo}></SearchAndAdd>
        <MemoList memos={memos} getItem={getItem}></MemoList>
      </div>

      <NewMemo setmemo={setmemo} addMeme={addMemo} memos={memos} 아이디={아이디}></NewMemo>
    </div>
  );
}


export default App;
