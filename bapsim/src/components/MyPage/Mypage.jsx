import styled from "styled-components";
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import { Button, ButtonGroup } from "@mui/material";

const MypageStyle = styled.div`
  position: fixed;
  top: 0;
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
    border-color: #f4f9f3;
    border-radius: 20px;
    width: 650px;
    height: 110px;
    display: flex;
    justify-content: center;
  }
  .coin_title {
    font-size: 20px;
    margin: 0 auto;
    margin-left: 30px;
    margin-top: 20px;
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
    color: #49663c;
  }
  .btn-group {
    top: 0px;
    display: flex;
    justify-content: center;
    margin-left: 30px;
  }
  .btn {
    color: #49663c;
    width: 300px;
    height: 70px;
    font-weight: bolder;
    font-size: 20px;
  }
`;

/*동전 그림 넣기*/

function Mypage() {
  return (
    <MypageStyle>
      <Box
        className="title"
        sx={{ display: "flex", alignItems: "flex-end", mt: 1, ml: 2 }}
      >
        마이페이지
      </Box>
      <Box sx={{ display: "flex", alignItems: "flex-end", mt: 8, ml: 10 }}>
        <Grid container spacing={2}>
          {/* 이름, 이메일 */}
          <Grid className="name" item xs={12} sm={12}>
            홍길동
          </Grid>
          <Grid className="email" item xs={12} sm={12}>
            Hong Gil Dong@gmail.com
          </Grid>
          {/* 재화 박스 */}
          <Box
            className="coin_box"
            sx={{ display: "flex", alignItems: "flex-start", mt: 5, ml: 0 }}
          >
            <Grid container spacing={2}>
              <Grid className="coin_title" item xs={12} sm={12}>
                잔여재화
              </Grid>
              <Grid className="coin_content" item xs={12} sm={6}>
                10,000
              </Grid>
              <Grid item xs={12} sm={5}>
                <Chip
                  className="coin_btn"
                  label="충 전"
                  clickable
                  component="a"
                  href="#"
                  color="primary"
                ></Chip>
              </Grid>
            </Grid>
          </Box>
          {/* 버튼 박스 */}
          <Box>
            <ButtonGroup className="btn-group" sx={{ mt: 10 }}>
              <Button
                className="btn"
                variant="contained"
                color="primary"
                href="#change-nickname"
              >
                닉네임 변경
              </Button>
              <Button
                className="btn"
                variant="contained"
                color="primary"
                href="#change-pw"
              >
                비밀번호 변경
              </Button>
            </ButtonGroup>
            <ButtonGroup className="btn-group group-sec" sx={{ mt: 0 }}>
              <Button
                variant="contained"
                color="primary"
                className="btn"
                href="#change-nickname"
                sx={{}}
              >
                구매 내역
              </Button>
              <Button
                className="btn"
                variant="contained"
                color="primary"
                href="#logout"
              >
                로그아웃
              </Button>
            </ButtonGroup>
          </Box>
        </Grid>
      </Box>
    </MypageStyle>
  );
}

export default Mypage;
