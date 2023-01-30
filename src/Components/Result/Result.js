import './Result.scss';
import { useTranslation } from 'react-i18next';

export default function Result({ correctAnswer, questions }) {
  const { t } = useTranslation();

  return (
    <div className="result">
      <img className="img" src="../images/finish-1.png" alt="finish" />
      <h2>
        {t('textResult')} {correctAnswer}/{questions.length}
      </h2>
      <a href="/">
        <button className="result_btn">{t('btnResult')}</button>
      </a>
    </div>
  );
}
