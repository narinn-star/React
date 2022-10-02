import styled from 'styled-components';
import React from 'react';
//import { Box } from '@mui/system';

const HeaderStyle = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  background-color: #B1D6A8;
  width: 800px;
  height: 80px;
  left: 50%;
  transform: translate(-50%);

  .title {
    padding: 15px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 40px;
    color: #509C90;
  }
`

function Header() {
  return (
    <HeaderStyle>
      <div className='title'>
        ■ Bapsim
      </div>
    </HeaderStyle>
  );
}

export default Header;