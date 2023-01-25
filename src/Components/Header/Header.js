import ReactSwitch from 'react-switch';
import { ReactComponent as Sun } from '../../static/images/sun.svg';
import { ReactComponent as Moon } from '../../static/images/moon.svg';

import './Header.scss';

export default function Header({ toggleTheme, theme }) {
  return (
    <>
      <div className="header_container">
        <header className="header">
          <h1 className="header_title">Tests to check your knowledge of React, JavaScript and HTML/CSS</h1>
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
