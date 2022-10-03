import React from 'react';
import Header from './hoc/Header/Header';
import Mypage from './components/MyPage/Mypage';
import theme from './theme/theme.jsx';
import { ThemeProvider } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Mypage />
    </ThemeProvider>
  );
}

export default App;
