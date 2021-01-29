/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import Widget from '../Widget';
import Button from '../Button';
import sucess from '../../lotties/sucess.json';
import notSucess from '../../lotties/notSucess.json';
import Form from '../Form';

const defaultOptions = (animation) => ({
  loop: true,
  autoplay: true,
  animationData: animation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
});

const PanelAnimation = styled.div`
  width: 350px;
  height: 150px;
  position:absolute;
  display:flex;
  justify-content:center;
  align-items:center;
`;

const AnimationSucess = () => (
  <PanelAnimation>
    <Lottie
      options={defaultOptions(sucess)}
      height={100}
      width={100}
    />
  </PanelAnimation>
);

const AnimationNotSucess = () => (
  <PanelAnimation>
    <Lottie
      options={defaultOptions(notSucess)}
      height={100}
      width={100}
    />
  </PanelAnimation>
);

const questionStates = {
  AGUARDANDO: 'AGUARDANDO',
  SUCESSO: 'SUCESSO',
  ERRO: 'ERRO',
};

function Question({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  onSetResult,
}) {

  const questionId = `question__${questionIndex}`;
  const [option, setOption] = useState(undefined);
  const [statusResultQuestion, setStatusResult] = useState(questionStates.AGUARDANDO);
  const [questionSubmit, setQuestionSubmit] = useState(undefined);


  return (
    <Widget>

      <Widget.Header>
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>

      {statusResultQuestion === questionStates.SUCESSO && <AnimationSucess /> }
      {statusResultQuestion === questionStates.ERRO && <AnimationNotSucess /> }

       <img
            alt="Descrição"
            style={{
            width: '100%',
            height: '150px',
            objectFit: 'cover',
            }}
            src={question.image}
        />

      <Widget.Content>
        <h2>
          {question.title}
        </h2>
        <p>
          {question.description}
        </p>

        <Form
          onSubmit={(infosDoEvento) => {
            infosDoEvento.preventDefault();

            setQuestionSubmit(option);

            if (question.answer === (option)) {
              onSetResult(true);
              setStatusResult(questionStates.SUCESSO);
            } else {
              setStatusResult(questionStates.ERRO);
              onSetResult(false);
            }

            setTimeout(() => {
              setStatusResult(questionStates.AGUARDANDO);
              setOption(undefined);
              setQuestionSubmit(undefined);
              onSubmit();
            }, 2000);

          }}
        >

         {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const isSelected = option === alternativeIndex;
            const isSubmitQuestion = alternativeIndex === questionSubmit;

            return (
              <Widget.Topic
                as="label"
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isSubmitQuestion && statusResultQuestion}
              >
                <input
                  id={alternativeId}
                  name={questionId}
                  type="radio"
                    // eslint-disable-next-line react/no-array-index-key
                  key={`opt_${alternativeIndex}`}
                  onChange={() => setOption(alternativeIndex)}
                  checked={isSelected}
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          <Button type="submit" disabled={option === undefined || questionSubmit !== undefined}>
            Confirmar
          </Button>

        </Form>
      </Widget.Content> 

    </Widget>
  );
}

export default Question;