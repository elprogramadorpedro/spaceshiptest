/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "rbx/index.css";
import GrayImg from "../../shared/gray_img";

const Planet = () => {
  return (
    <div>
      <h4>Mercurio </h4>
      <p>
        Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema
        Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a
        maior excentricidade e o seu eixo apresenta a menor inclinação em
        relação ao plano da órbita dentre todos os planetas do Sistema Solar.{" "}
      </p>
      <GrayImg />
    </div>
  );
};

export default Planet;
