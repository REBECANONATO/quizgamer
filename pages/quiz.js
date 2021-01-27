import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';


import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Player from "../src/components/Player";
import GitHubCorner from '../src/components/GitHubCorner';

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


function QuizPage() {
  const [name, setName] = useState('');

  useEffect(() => {
    function getQueryName() {
      const params = (new URL(window.location)).searchParams;
      const nameFromQuery = params.get('name');
      setName(nameFromQuery);
    }
    getQueryName();
  }, []);

  return (
    <QuizBackground backgroundImage={db.bgQuiz}>

      <Head>
        <title>Xadrez Quiz</title>
      </Head>

      <QuizContainer>
        <QuizLogo />
        
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Bem vinda <b>{name}</b> está preparada para o Quiz?</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            Logo aqui estará o Quiz...
          </Widget.Content>

        </Widget>
        

      </QuizContainer>

      <GitHubCorner projectUrl="https://github.com/REBECANONATO" />
      <Player />
    </QuizBackground>
  );
}

export default QuizPage;