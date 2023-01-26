import ReactSwitch from 'react-switch';
import { ReactComponent as Sun } from '../../static/images/sun.svg';
import { ReactComponent as Moon } from '../../static/images/moon.svg';

import { useTranslation } from 'react-i18next';

import './Header.scss';

export default function Header({ toggleTheme, theme }) {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <div className="header_container">
        <header className="header">
          <div className="btn-container">
            <button onClick={() => changeLanguage('en')} className="btn_translation-en">
              <img className="img_translation-en" src="../images/united-states.png" alt="united-states" />
            </button>
            <button onClick={() => changeLanguage('ua')} className="btn_translation-uk">
              <img className="img_translation-uk" src="../images/ukraine.png" alt="ukraine" />
            </button>
          </div>
          <h1 className="header_title">{t('title')}</h1>
        </header>
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
    </>
  );
}
