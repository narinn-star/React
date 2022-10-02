// 책
import React, {Component} from 'react';

class Counter extends Component{
  // constructor(props){
  //   super(props);
  //   // state 초깃값 설정하기
  //   this.state = {
  //     number: 0,
  //     fixedNumber: 0
  //   };
  // }
  state = {
    number: 0,
    fixedNumber: 0
  };
  render() {
    const {number, fixedNumber} = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정
          onClick={() => {
            // this.setState를 사용하여 state에 새로운 값 넣을 수 있음
            //this.setState({number: number + 1});
            //this.setState({number: this.state.number + 1}); // this.setState를 한다고 해서 state 값이 바로 바뀌지 않기 때문에 숫자는 1씩 더해짐
                                                            // this.setState를 사용할 때 객체 대신 함수를 인자로 넣으면 해결됨
            //////////////////////////////////////////////////                                                
            // this.setState(prevState => {
            //   return {
            //     number: prevState.number + 1
            //   };
            // });
            // this.setState(prevState => ({
            //   number: prevState.number + 1
            // }));
            //////////////////////////////////////////////////
            //setState로 값 업데이트한 후 setState의 두번째 파라미터로 콜백 함수 등록
            this.setState(
              {
                number: number + 1
              },
              () => {
                console.log('방금 setState가 호출되었습니다.');
                console.log(this.state);
              }
            );
          }}
          >
            +1
          </button>
      </div>
    );
  }
}

export default Counter;