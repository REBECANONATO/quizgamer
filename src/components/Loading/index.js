import React from 'react';
import Lottie from 'react-lottie';
import Carregando from '../../../assets/img/carregandoCavalo.gif';
import loading from '../../lotties/loading.json';
import Widget from '../Widget';


const defaultOptions = (animation) => ({
  loop: true,
  autoplay: true,
  animationData: animation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
});

export default function Loading() {
  return (
    <Widget>
      <Widget.Header>
        Estamos preparando o tabuleiro...
      </Widget.Header>

      <Widget.Content>
        <img
            alt="Descrição"
            style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            }}
            src={Carregando}
        />
        {/* <Lottie
          options={defaultOptions(loading)}
          height={70}
          width={70}
        /> */}
      </Widget.Content>
    </Widget>
  );
}