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
    Content:'베어는 메모와 산문을 작성할 수 있는 아름답고 편리한 앱입니다.'
  },
  {
    id:2,
    Title:'멋진 새 메모',
    Content:'편안하게 무언가 적어보세요.'
  },
  {
    id:3,
    Title:'안녕하세요',
    Content:'새 메모입니다.'
  },
  {
    id:4,
    Title:'좋은 하루 보내세요.',
    Content:'근데 좋은 하루란 무엇인가요?'
  },
  {
    id:1,
    Title:'베어에 환영합니다.',
    Content:'베어는 메모와 산문을 작성할 수 있는 아름답고 편리한 앱입니다.'
  },
  {
    id:2,
    Title:'멋진 새 메모',
    Content:'편안하게 무언가 적어보세요.'
  },
  {
    id:3,
    Title:'안녕하세요',
    Content:'새 메모입니다.'
  },
  {
    id:4,
    Title:'좋은 하루 보내세요.',
    Content:'근데 좋은 하루란 무엇인가요?'
  }])



  return (
    <div className="App">
      <div>
        <SearchAndAdd></SearchAndAdd>
        <MemoList memos={memos}></MemoList>
      </div>

      <NewMemo></NewMemo>
    </div>
  );
}


/*
componentList
1. search and add
메모를 검색하면 메모리스트에서 선별해 나온다. add 버튼을 누르면 빈 메모지가 오른 쪽에 뜬다.

2. memoList
memoItem들이 나열돼 있게 해주는 부모다.

3. memoItem
등록한 시간이후 지난 시간이 적혀 있고, 새메모 버튼을 클릭하면 지난 시간이 업데이트 된다. 

4. newMemo
H1이 적혀있는 제목란과
하단에는 자유롭게 적는 메모란이 있다.
*/


export default App;
