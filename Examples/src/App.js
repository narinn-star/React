//import { Container } from '@mui/material';
import React, {Component} from 'react';
//import React from 'react';
//import SignIn from './SignIn';
//import SignUp from './SignUp';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';

//import IterationSample from './IterationSample';
//import ValidationSample from './ValidationSample';
//import ScrollBox from './ScrollBox';
//import { BrowserRouter, Route } from 'react-router-dom';
//import './App.css';
//import Main from './components/Main';

// function App() {
//   return (
//     <div>
//       <Main></Main>
//       <ValidationSample />
//     </div>
//   );
// }

// function App(){
//   return (
//     <div>
//       <LifeCycleSample />
//     </div>
//   )
// }

// class App extends Component {
//   render(){
//     return(
//       // <div>
//       //   <ScrollBox ref = {(ref) => this.scrollBox = ref}/>
//       //     <button onClick={() => this.scrollBox.scrollToBottom()}>
//       //       맨 밑으로
//       //     </button>
//       // </div>
//       <IterationSample />
//     )
//   }
// }

function getRandomColor(){
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }
  render(){
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color= {this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;