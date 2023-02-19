import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../index.scss';
import questions from '../Games/AllQuestions/questionsReact.json';
import Result from '../Result/Result';
import Game from '../Games/Game';

export default function GameReact() {
  const [step, setStep] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const { t } = useTranslation();
  const questionReactObj = t('question_react', { returnObjects: true });

  const question = questionReactObj[step];

  const onClickVariant = (index) => {
    setStep(step + 1);
    if (index === question.correct) {
      setCorrectAnswer(correctAnswer + 1);
    }
  };

  return step !== questions.length ? (
    <Game step={step} question={question} onClickVariant={onClickVariant} questions={questions} />
  ) : (
    <>
      <Result correctAnswer={correctAnswer} questions={questions} />
    </>
  );
}
