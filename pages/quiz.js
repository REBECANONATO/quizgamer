import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReturnDownBack } from '@styled-icons/ionicons-outline/ReturnDownBack';


import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Player from "../src/components/Player";
import GitHubCorner from '../src/components/GitHubCorner';
import Loading from '../src/components/Loading';
import Result from '../src/components/Result';
import Question from '../src/components/Question';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export const Form = styled.form`
  
`;

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};



function QuizPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [results, setResult] = useState([]);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  useEffect(() => {
    function getQueryName() {
      const params = (new URL(window.location)).searchParams;
      const nameFromQuery = params.get('name');
      setName(nameFromQuery);
    }
    getQueryName();
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 5000);
  }, []);

  function handleSetResult(result) {
    setResult(results.concat([result]));
  }

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  function submit(e) {
    e.preventDefault();
    router.push(`/`);
  }

  return (
    <QuizBackground backgroundImage={db.bgQuiz}>

      <Head>
        <title>Xadrez Quiz</title>
      </Head>

      <QuizContainer>
  
        <Form onSubmit={submit}>
          <button type="submit">
            <ReturnDownBack size="24" />
          </button>
        </Form>

        <QuizLogo />

        {screenState === screenStates.QUIZ && (
          <Question
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            onSetResult={handleSetResult}
          />
      )}

      {screenState === screenStates.LOADING && <Loading />}

      {screenState === screenStates.RESULT && <Result result={results} />}      

      </QuizContainer>

      <GitHubCorner projectUrl="https://github.com/REBECANONATO" />
      <Player />
    </QuizBackground>
  );
}

export default QuizPage;