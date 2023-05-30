import './App.css';

import logo from './img/logo.svg'

function App() {
  return (
    <>
      <header>
        <img src={logo} alt="logo" id="main-logo" />
        <div className="bar"></div>
        <nav>
          <div className="nav-item">선수 소개</div>
          <div className="nav-item">팀 소개</div>
          <div className="nav-item">대회 소개</div>
          <div className="nav-item">대회 일정표</div>
          <div className="nav-item">경기 순위</div>
          <div className="nav-item">다시보기</div>
        </nav>
        <div className="bar"></div>
      </header>
      <div id="body">

      </div>
      <footer>

      </footer>
    </>
  );
}

export default App;
