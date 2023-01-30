import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import GameReact from '../../GameReact/GameReact';

export default function ReactPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const onClick = () => {
    navigate('/');
  };
  return (
    <div className="wrapper">
      <button onClick={onClick} className="btn">
        {t('btnOnPageTest')}
      </button>
      <div className="App">
        <GameReact />
      </div>
    </div>
  );
}
