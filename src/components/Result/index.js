import React from 'react';
import Widget from '../Widget';

function Result({ result }) {
    return (
      <Widget>
        <Widget.Header>
          <h1>Tela de Resultado</h1>
        </Widget.Header>
        <Widget.Content>
          <p>
            Você acertou
            {' '}
            {result.reduce((somatorioAtual, resultAtual) => {
              const isAcerto = resultAtual === true;
              if (isAcerto) {
                return somatorioAtual + 1;
              }
  
              return somatorioAtual;
            }, 0)}
            {' '}
            perguntas
          </p>
        </Widget.Content>
      </Widget>
    );
  }

  export default Result;