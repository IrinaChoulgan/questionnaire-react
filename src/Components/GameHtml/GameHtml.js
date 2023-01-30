import { useState } from 'react';
import '../../index.scss';
import questionsHtml from '../Games/AllQuestions/questionsHtml.json';
import Result from '../Result/Result';
import Game from '../Games/Game';
import { useTranslation } from 'react-i18next';

export default function GameHtml() {
  const [stepHtml, setStepHtml] = useState(0);
  const [correctAnswerHtml, setCorrectAnswerHtml] = useState(0);
  const { t } = useTranslation();
  const questionHtmlObj = t('question_html', { returnObjects: true });

  const questionHtml = questionHtmlObj[stepHtml];

  const onClickVariantHtml = (index) => {
    setStepHtml(stepHtml + 1);
    if (index === questionHtml.correct) {
      setCorrectAnswerHtml(correctAnswerHtml + 1);
    }
  };

  return stepHtml !== questionsHtml.length ? (
    <Game
      step={stepHtml}
      question={questionHtml}
      onClickVariant={onClickVariantHtml}
      questions={questionsHtml}
    />
  ) : (
    <>
      <Result correctAnswer={correctAnswerHtml} questions={questionsHtml} />
    </>
  );
}
