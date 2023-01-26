import React, { createContext, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './index.scss';

import ReactPage from './Components/Page/ReactPage/ReactPage';
import JSPage from './Components/Page/JSPage/JSPage';
import HtmlPage from './Components/Page/HtmlPage/HtmlPage';
import Card from './Components/Card/Card';
import Header from './Components/Header/Header';
import { useLS } from './hooks/useLS';
import { useTranslation } from 'react-i18next';

export const ThemeContext = createContext(null);

function App() {
  const navigate = useNavigate();
  const [theme, setTheme] = useLS('light');

  const { t } = useTranslation();

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

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
        <Header toggleTheme={toggleTheme} theme={theme} />
        <Routes>
          <Route path="/react" element={<ReactPage />}></Route>
          <Route path="/js" element={<JSPage />}></Route>
          <Route path="/html_css" element={<HtmlPage />}></Route>
          <Route
            path="/"
            element={
              <div className="container">
                <Card onClick={onClick} title={'React'} text={t('titleReact')} />
                <Card onClick={onClickJS} title={'JS'} text={t('titleJs')} />
                <Card onClick={onClickHtml} title={'HTML/CSS'} text={t('titleHtml')} />
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
