import React, { Component } from 'react';

import React from 'react';
import reactDom from 'react-dom';

const Input = (props) => (
      //ref를 호출하고 간단하게 원하는 요소에 절달해 주면 됨
    const formRef =React.createRef();å
      const inputRef = React.createRef();

  // onSumit이라는 멤버 변수가 있음
  onSubmit = event => {
    event.preventDefault(); //브라우저의 기본 기능을 취소해줌(event가 발생 될 때, 페이지가 초기화되는 기능)
    // console.log(this.inputRef.current.value);
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name); //이름이 있다면(텅텅비어있지않다면) onadd에 name을 전달해 줄거임.
    // this.inputRef.current.value = ''; //내가 input에 입력한것을 초기화 해줌.
    this.formRef.current.reset();
  };
  return (
      // 사용자가 버튼을 누르면 onSumit의 콜백이 호출 됨
      <form ref={this.formRef} className="add_form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="Habit"
        ></input>
        <button className="add-button">Add</button>
      </form>
    );
  );


export default input;
