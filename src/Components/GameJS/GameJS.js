import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../index.scss';
import questionsJS from '../Games/AllQuestions/questionsJS.json';
import Result from '../Result/Result';
import Game from '../Games/Game';

export default function GameJS() {
  const [stepJS, setStepJS] = useState(0);
  const [correctAnswerJS, setCorrectAnswerJS] = useState(0);
  const { t } = useTranslation();
  const questionJsObj = t('question_html', { returnObjects: true });

  const questionJS = questionJsObj[stepJS];

  const onClickVariantJS = (index) => {
    setStepJS(stepJS + 1);
    if (index === questionJS.correct) {
      setCorrectAnswerJS(correctAnswerJS + 1);
    }
  };

  return stepJS !== questionsJS.length ? (
    <Game step={stepJS} question={questionJS} onClickVariant={onClickVariantJS} questions={questionsJS} />
  ) : (
    <>
      <Result correctAnswer={correctAnswerJS} questions={questionsJS} />
    </>
  );
}
