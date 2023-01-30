import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import GameHtml from '../../GameHtml/GameHtml';

export default function HtmlPage() {
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
        <GameHtml />
      </div>
    </div>
  );
}
