export default function Result({ correctAnswer, questions }) {
  return (
    <div className="result">
      <img src="../images/finish-1.png" alt="finish" />
      <h2>
        Вітаємо! Результат опитування: {correctAnswer}/{questions.length}
      </h2>
      <a href="/">
        <button>Спробувати знову</button>
      </a>
    </div>
  );
}
