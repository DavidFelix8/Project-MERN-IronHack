import React from 'react';
import './style.scss';

function AboutUs() {
  return (
    <section className="About_Us-Wave">
      <div className="d-flex flex-column w-50">
        <h1 className="About_Us-Title">What are we?</h1>
        <h5 className="About_Us-Text">
          É um facto estabelecido de que um leitor é distraído pelo conteúdo legível de uma página
          quando analisa a sua mancha gráfica. Logo, o uso de Lorem Ipsum leva a uma distribuição
          mais ou menos normal de letras, ao contrário do uso de "Conteúdo aqui, conteúdo aqui",
          tornando-o texto legível.{' '}
        </h5>
      </div>
    </section>
  );
}

export default AboutUs;
