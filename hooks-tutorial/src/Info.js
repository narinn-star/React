//import React, { useState, useEffect } from "react";
//import React, {useReducer} from "react";
import React from "react";
import useInputs from "./useInputs";

// function reducer(state, action) {
//   return {
//     ...state,
//     [action.name]:action.value
//   };
// }

const Info = () => {   
  // const [name, setName] = useState('');
  // const [nickname, setNickname] = useState('');

  // const [state, dispatch] = useReducer(reducer, {
  //   name:'',
  //   nickname: ''
  // });

  // const {name, nickname} = state;
  // const onChange = e => {
  //   dispatch(e.target);
  // }

  const [state, onChange] = useInputs({
    name: '',
    nickname: ''
  });
  const {name, nickname} = state;
  
  // useEffect(() => {
  //   // console.log("렌더링 완료");
  //   // console.log({
  //   //   name,
  //   //   nickname
  //   // });
  //   //console.log("마운트될 때만 실행"); // useEffect()에서 두 번째 파라미터에 [] 넣기
  //   //console.log(name);
  //   console.log('effect');
  //   console.log(name);
  //   return () => {
  //     console.log('cleanup');
  //     console.log(name);
  //   };
  // });

  // const onChangeName = e => {
  //   setName(e.target.value);
  // };
  // const onChaneNickname = e => {
  //   setNickname(e.target.value);
  // };

  return (
    <div>
      <div>
        {/*<input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChaneNickname} />*/}
        <input name="name" value={name} onChange={onChange} />
        <input name = "nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b>  {name}
        </div>
        <div>
        <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;