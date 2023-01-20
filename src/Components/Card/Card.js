import './Card.scss';

export default function Card({ onClick, title, text }) {
  return (
    <div className="blog-card spring-fever">
      <div className="title-content">
        <h3>{title}</h3>
        <hr className="card_hr" />
        <div className="intro">{text}</div>
        <button className="card_btn" onClick={onClick}>
          Start
        </button>
      </div>
      <div className="utility-info"></div>
    </div>
  );
}
