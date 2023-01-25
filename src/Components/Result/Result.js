import './Result.scss';

export default function Result({ correctAnswer, questions }) {
  return (
    <div className="result">
      <img className="img" src="../images/finish-1.png" alt="finish" />
      <h2>
        Вітаємо! Результат опитування: {correctAnswer}/{questions.length}
      </h2>
      <a href="/">
        <button className="result_btn">Спробувати знову</button>
      </a>
    </div>
  );
}
