import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  MainHeader,
  MainNav,
  UniqueQuestions,
  QuestionList,
  QuestionProfile,
} from './components';
import dummyQuestionList from './assets/questionlistMockdata.json';
import '../style/index.css';

const dummyQuestions = [
  {
    type: 'hot',
    title: '7652번 파이썬 bfs 반례 부탁드립니다 ㅜ',
    url: '.',
  } as const,
  {
    type: 'today',
    title: '시간초과 문제 해결 도움 부탁드립니다. (주석 있어요)[스포주의]',
    url: '.',
  } as const,
  {
    type: 'random',
    title: 'C 연결리스트로 구현하면 시간초과나는데 해결방법이 있을까요?',
    url: '.',
  } as const,
];

function Main() {
  return (
    <main>
      <div className="inner">
        <div>
          <UniqueQuestions questions={dummyQuestions} />
          <QuestionList itemDatas={dummyQuestionList} />
        </div>
        <aside>
          <img
            className="banner"
            src="https://i.pinimg.com/originals/b0/df/95/b0df95cfc6f31293d002d4d6daac253c.jpg"
            alt="포인트 정보가 들어갈 배너"
          />
          <QuestionProfile />
        </aside>
      </div>
    </main>
  );
}

function App() {
  return (
    <>
      <MainHeader />
      <MainNav />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/quest" element={<div>quest</div>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
