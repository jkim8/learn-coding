/*eslint-disable*/

import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css';

function App(){
 
  let [글제목, 글제목변경] = useState( ['남자코트 추천', '강남 우동맛집', '파이썬 독학'] );
  let [따봉, 따봉변경] =  useState(0)
  //state가 바뀌면 HTML이 재렌더링 된다. 새로고침 없이
  let [modal, modal변경] = useState(false)
  let [누른제목, 누른제목변경] = useState(0)
  let [입력값, 입력값변경] = useState('')


  // function 반복된UI() {
  //   var 어레이 = []
  //   for (let i = 0; i<3; i++) {
  //     어레이.push(<div>안녕</div>)
  //   }
  //   return 어레이
  // }





  function 제목바꾸기() {
    var newArray = [...글제목]
    newArray[0] = '여자코트추천'
    글제목변경(newArray)
  }


  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      {/* <button onClick={제목바꾸기}>버튼</button> */}
      {/* <div className="list">
        <h3>{ 글제목[0] } <span onClick={()=> { 따봉변경(따봉+1) }} >👍</span> {따봉} </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ 글제목[1] }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ 글제목[2] }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>  */}

 

       {/* { 반복된UI() } */}

      {

        글제목.map((글, i) => {
          return  (
            <div className="list" key={i}>
              <h3 onClick={ ()=> { 누른제목변경(i) }} >{ 글 }  <span onClick={()=> { 따봉변경(따봉+1) }} >👍</span>{따봉}</h3>
              <p>2월 17일 발행</p>
              <hr/>
            </div> 
          )

        })

      }


      <div className="publish">
        <input onChange={ (e)=> { 입력값변경(e.target.value) } } />
        <button onClick={ ()=> { 
          var arrayCopy = [...글제목]
          arrayCopy.unshift(입력값)
          글제목변경( arrayCopy )
         } } >저장</button>
      </div>

        {/* {입력값} */}
        {/* <input onChange={ (e)=> {입력값변경(e.target.value)} } /> */}

       <button onClick={()=>{modal변경(!modal)}}>모달</button>

      {/* <button onClick={ ()=> { 누른제목변경(0) }}>버튼1</button>
      <button onClick={ ()=> { 누른제목변경(1) }}>버튼2</button>
      <button onClick={ ()=> { 누른제목변경(2) }}>버튼3</button> */}


      <Profile/>

       {
         modal === true 
         ? <Modal 글제목={글제목} 누른제목={누른제목}/>
         : null
       }

    </div>
  )
}


function Modal(props) {
  return (
    <div className="modal">
      <h2>제목 {props.글제목[props.누른제목]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div> 
  )
}


class Profile extends React.Component {
  constructor() {
    super()
    this.state = { name : 'Kim', age : 33 }
  }

  changeName = () => {
    this.setState({name: 'Park'})
  }

    render(){
      return (
        <div>
          <h3>프로필입니다.</h3>
          <p>저는 {this.state.name}입니다</p>
          <button onClick={ this.changeName } >버튼</button>
        </div>
      )
  }
}














export default App;
