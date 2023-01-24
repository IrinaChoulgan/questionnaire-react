import React, { createContext, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './index.scss';
import ReactSwitch from 'react-switch';

import ReactPage from './Components/Page/ReactPage/ReactPage';
import JSPage from './Components/Page/JSPage/JSPage';
import HtmlPage from './Components/Page/HtmlPage/HtmlPage';
import Card from './Components/Card/Card';
import Header from './Components/Header/Header';

import { ReactComponent as Sun } from '../src/static/images/sun.svg';
import { ReactComponent as Moon } from '../src/static/images/moon.svg';

export const ThemeContext = createContext(null);

function App() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState('light');

  const onClick = () => {
    navigate('/react');
  };

  const onClickJS = () => {
    navigate('/js');
  };

  const onClickHtml = () => {
    navigate('/html_css');
  };

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <div className="header_container">
          <Header />
          <div className="switch">
            <ReactSwitch
              onChange={toggleTheme}
              checked={theme === 'light'}
              uncheckedIcon={<Sun className="soon_svg" />}
              checkedIcon={<Moon className="moon_svg" />}
              onColor={'#183934'}
              offColor={'#008080'}
            />
          </div>
        </div>
        <hr />
        <Routes>
          <Route path="/react" element={<ReactPage />}></Route>
          <Route path="/js" element={<JSPage />}></Route>
          <Route path="/html_css" element={<HtmlPage />}></Route>
          <Route
            path="/"
            element={
              <div className="container">
                <Card
                  onClick={onClick}
                  title={'React'}
                  text={'In this block, 13 theoretical questions from React await you'}
                />
                <Card
                  onClick={onClickJS}
                  title={'JS'}
                  text={'In this block, 32 theoretical questions from JavaScript await you'}
                />
                <Card
                  onClick={onClickHtml}
                  title={'HTML/CSS'}
                  text={'In this block, 16 theoretical questions from HTML and CSS await you'}
                />
              </div>
            }
          ></Route>
        </Routes>
        <hr />
        <footer className="footer" />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
