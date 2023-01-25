import './Game.scss';

export default function Game({ question, onClickVariant, step, questions }) {
  const persentage = Math.round((step / questions?.length) * 100);
  return (
    <>
      <div className="progress">
        <div style={{ width: `${persentage}%` }} className="progress__inner"></div>
      </div>
      <h1 className="title">{question?.title}</h1>
      <ul>
        {question?.variants.map((text, index) => (
          <li className="item" key={index} onClick={() => onClickVariant(index)}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}
