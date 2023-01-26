import './Card.scss';
import { useTranslation } from 'react-i18next';

export default function Card({ onClick, title, text }) {
  const { t } = useTranslation();

  return (
    <div className="blog-card spring-fever">
      <div className="title-content">
        <h3>{title}</h3>
        <hr className="card_hr" />
        <div className="intro">{text}</div>
        <button className="card_btn" onClick={onClick}>
          {t('cardButton')}
        </button>
      </div>
      <div className="utility-info"></div>
    </div>
  );
}
