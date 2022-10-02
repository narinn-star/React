import React from 'react';
import './Main.css';

function Main() {
  return (
    <div id='root'>
      <div data-pc-layout="pc-left-container" className="App">
        <div className='left-box'>
          <div className='main'>
            <p className="titles">검색창은 다른걸로 대체 <span className='title'>Bapsim</span></p>
          </div>
          <form className='search'>
            <div className='input-button'>
              <input type="text" name='search' value="A코스" className='aa' placeholder='A코스'></input>
              <button type='submit' className='search-btn'>
                <div className='btn-design'>
                </div>
              </button>
            </div>
          </form>
          <div className='list'>
            <a className='menu' href='naver.com'>네이버</a>
            <a className='menu' href='naver.com'>네이버요</a>
            <a className='menu' href='naver.com'>네이버입니당</a>
            <a className='menu' href='naver.com'>네이버</a>
            <a className='menu' href='naver.com'>네이버</a>
            <a className='menu' href='naver.com'>네이버</a>
            <a className='menu' href='naver.com'>네이버</a>
            <a className='menu' href='naver.com'>네이버</a>
            <a className='menu' href='naver.com'>네이버</a>
            <a className='menu' href='naver.com'>네이버</a>
          </div>
          <div className='left-bottom'>
            <div className='download'>
              <div className='app-img'></div>
              <p className='down-details'>앱으로 편하게 쇼핑하세요<span>다운로드로 연결됩니다</span></p>
            </div>
            <div className='store'>
              <a href='https://play.google.com/store/apps/details?id=cc.shoplink.mobile'>Google Play </a> &nbsp; &nbsp; &nbsp;
              <a href='https://apps.apple.com/us/app/%EC%9C%99%EC%9E%87-wing-eat/id1219627913?l=ko&ls=1'>App Store</a>
            </div>
          </div>
        </div>
      </div>
      <div data-pc-layout="app-template" className='app-template'>
        

      </div>
    </div>
  )
}

export default Main;