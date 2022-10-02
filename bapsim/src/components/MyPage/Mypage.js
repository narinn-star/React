import styled from 'styled-components';
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import { ButtonGroup } from '@mui/material';

const MypageStyle = styled.div`
  position: fixed;
  margin: 0 auto;
  margin-top: 80px;
  width: 800px;
  left: 50%;
  transform: translate(-50%);
  font-weight: bold;

  .title {
    font-size: 20px;
  }
  .name {
    font-size: 30px;
  }
  .email {
    font-size: 20px;
  }
  .coin_box {
    border-style: solid;
    border-color: #F4F9F3;
    border-radius: 20px;
    width: 650px;
    height: 110px;
  }
  .coin_title {
    font-size: 20px;
    margin: 0 auto;
    margin-left: 30px;
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
  }
  .coin_content {
    font-size: 25px;
    margin-left: 30px;
    display: flex;
    justify-content: space-between;
  }
  .coin_btn {
    width: 80px;
    height: 35px;
    font-weight: bolder;
    font-size: 15px;
  }
  .btn-group{
    
  }
`

/*동전 그림 넣기*/

function Mypage() {
  return (
    <MypageStyle>
      <Box className='title' sx={{ display: 'flex', alignItems: 'flex-end', mt: 1, ml: 2 }}>
        마이페이지
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end', mt: 8, ml: 10 }}>
        <Grid container spacing={2}>
          <Grid className='name' item xs={12} sm={12}>
            홍길동
          </Grid>
          <Grid className='email' item xs={12} sm={12}>
            Hong Gil Dong@gmail.com
          </Grid>
          <Box className='coin_box' sx={{ display: 'flex', alignItems: 'flex-start', mt: 5, ml: 0 }}>
            <Grid container spacing={2}>
              <Grid className='coin_title' item xs={12} sm={12}>
                잔여재화
              </Grid>
              <Grid className='coin_content' item xs={12} sm={6}>
                10,000
              </Grid>
              <Grid item xs={12} sm={5}>
                <Chip className='coin_btn'label="충 전" clickable component="a" href='#'>
                </Chip>
              </Grid>
            </Grid>
          </Box>
          <ButtonGroup className='btn-group'>

          </ButtonGroup>
        </Grid>
      </Box>
    </MypageStyle>
  );
}

export default Mypage;