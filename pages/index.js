import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import NameInput from '../src/components/NameInput';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Player from "../src/components/Player";
import ListQuiz from "../src/components/ListQuiz";

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

export default function Home() {

  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>

      <Head>
        <title>Xadrez Quiz</title>
        <link rel="shortcut icon" type="image/x-icon" href="../assets/img/favicon.ico" />
        <link rel="icon" href="favicon.png" type="image/png" />
      </Head>

      <QuizContainer>
        <QuizLogo />
        
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <NameInput />
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>
            <h1>Venha ver o quiz dos colegas</h1>
          </Widget.Header>
          <Widget.Content>
            <ListQuiz />
          </Widget.Content>
        </Widget>

        <Footer />

      </QuizContainer>

      <GitHubCorner projectUrl="https://github.com/REBECANONATO/quizgamer" />
      <Player />

    </QuizBackground>
  );
}
