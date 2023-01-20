import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './index.scss';

import ReactPage from './Components/Page/ReactPage/ReactPage';
import JSPage from './Components/Page/JSPage/JSPage';
import HtmlPage from './Components/Page/HtmlPage/HtmlPage';

function App() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/react');
  };

  const onClickJS = () => {
    navigate('/js');
  };

  const onClickHtml = () => {
    navigate('/html_css');
  };

  return (
    <>
      <header className="header">
        <h1 className="header_title">Tests to check your knowledge of React, JavaScript</h1>
      </header>
      <hr></hr>
      <Routes>
        <Route path="/react" element={<ReactPage />}></Route>
        <Route path="/js" element={<JSPage />}></Route>
        <Route path="/html_css" element={<HtmlPage />}></Route>
        <Route
          path="/"
          element={
            <>
              <div class="blog-card spring-fever">
                <div class="title-content">
                  <h3>SPRING FEVER</h3>
                  <hr />
                  <div class="intro">Yllamco laboris nisi ut aliquip ex ea commodo.</div>
                  <button onClick={onClick}>React</button>
                </div>
                <div class="utility-info"></div>
              </div>
              <button onClick={onClickJS}>JS</button>
              <button onClick={onClickHtml}>Html/Css</button>
            </>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
