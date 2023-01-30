import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import GameJS from '../../GameJS/GameJS';

export default function JSPage() {
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
        <GameJS></GameJS>
      </div>
    </div>
  );
}
