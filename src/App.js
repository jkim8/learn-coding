import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css';

function App(){
 
  let posts = '강남 고기 맛집';
  const [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집'])
  //state가 바뀌면 HTML이 재렌더링 된다. 새로고침 없이
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <div className="list">
        <h3>{ 글제목[1] }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
    </div>
  )
}

export default App;
