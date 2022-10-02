import React, { useState } from "react";

const IterationSample = () => {
  // const names = ['가나다', 'ABC', '집에', '가고싶다'];
  // const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  // return <ul>{nameList}</ul>
  const [names, setNames] = useState([
    { id: 1, text: '가나다' },
    { id: 2, text: 'ABC' },
    { id: 3, text: '집에' },
    { id: 4, text: '가고싶다' }
  ]);

  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);  //새로운 항목 추가할 때 사용할 id

  const onChange = e => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText('');
  };

  const onRemove = id => {
    const nextNames = names.filter(name => name.id !== id);
    setNames(nextNames);
  }

  const namesList = names.map(name => <li key={name.id} onDoubleClick = {() => onRemove(name.id)}>{name.text}</li>);
  return (
    <>
      <input value={inputText} onChange={onChange}/>
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </>
  );
};

export default IterationSample;