// import React, {Component} from "react";


// class EventPractice extends Component {
//   state = {
//     username: '',
//     message: ''
//   }

//   // constructor(props){
//   //   super(props);
//   //   this.handleChange = this.handleChange.bind(this);
//   //   this.handleClick = this.handleClick.bind(this);
//   // }

//   // handleChange(e){
//   //   this.setState({
//   //     message: e.target.value
//   //   });
//   // }

//   handleChange = (e) => {
//     this.setState({
//       //message:e.target.value
//       [e.target.name]: e.target.value //객체 안에서 key를 []로 감싸면 레퍼런스가 가리키는 실제 값이 key 값으로 사용 
//     });
//   }

//   // handleClick(e){
//   //   alert(this.state.message);
//   //   this.setState({
//   //     message: ''
//   //   });
//   // }

//   handleClick = (e) => {
//     //alert(this.state.message);
//     alert(this.state.username + ': ' + this.state.message);
//     this.setState({
//       username:'',
//       message: ''
//     });
//   }

//   handleKeyPress = (e) => {
//     if(e.key === 'Enter'){
//       this.handleClick();
//     }
//   }
  
//   render() {
//     return(
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="username"
//           placeholder="사용자명"
//           value={this.state.username}
//           onChange={this.handleChange}
//           />
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나 입력해바"
//           value={this.state.message}
//           // onChange={
//           //   (e) => {
//           //     this.setState({
//           //       message: e.target.value
//           //     })
//           //   }
//           // }
//           onChange={this.handleChange}
//           onKeyPress={this.handleKeyPress}
//           />
//         <br></br>
//           {/* <button onClick={
//             () => {
//               alert(this.state.message);
//               this.setState({
//                 message: '' 
//               });
//             }
//           }>확인</button> */}
//           <button onClick={this.handleClick}>확인</button>
//       </div>
//     );
//   }
// }

// export default EventPractice;

// 함수형 컴포넌트로 구현
import React, {useState} from "react"; 

const EventPractice = () => {
  // const [username, setUsername] = useState('');
  // const [message, setMessage] = useState('');
  // const onChangeUsername = e => setUsername(e.target.value);
  // const onChangeMessage = e => setMessage(e.target.value);
  const [form, setForm] = useState({
    username: '',
    message: ''
  });
  const {username, message} = form;
  const onChange = e => {
    const nextForm = {
      ...form, //기존의 form 내용을 여기 복사하고
      [e.target.name]: e.target.value //원하는 값 덮어 씌우기
    };
    setForm(nextForm);
  };
  const onClick = () => {
    alert(username + ': ' + message);
    // setUsername('');
    // setMessage('');
    setForm({
      username:'',
      message:''
    });
  };

  const onKeyPress = e => {
    if(e.key === 'Enter'){
      onClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
         <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={username}
          //onChange={onChangeUsername}
          onChange={onChange}
          />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해바"
          value={message}
          //onChange={onChangeMessage}
          onChange={onChange}
          onKeyPress={onKeyPress}
          />
          <br></br>
          <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;