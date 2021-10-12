import React, { Fragment } from "react";
import "rbx/index.css";
import Planet from "./planet";
import Footers from "../footers";

const Planets = () => {
  return (
    <div>
      <Fragment> Plamet List</Fragment>

      <hr />
      <Planet
        name="Mercurio"
        description="Mercúrio é um dos quatro planetas telúricos do Sistema Solar e seu corpo é rochoso como a Terra. É o menor planeta do sistema solar, com um raio equatorial de 2 439,7 km.[9] Mercúrio é menor até que os dois maiores satélites naturais do sistema solar, as luas Ganimede e Titã, embora seja mais massivo. O planeta é formado de aproximadamente 70% de material metálico e 30% de silicatos.[10] Sua densidade é a segunda maior do sistema solar, de 5,427 g/cm³, um pouco menor apenas do que a terrestre, de 5,515 g/cm³.[9] Se o efeito da compressão gravitacional fosse retirado, os materiais constituintes de Mercúrio seriam mais densos, com uma densidade não comprimida de 5,3 g/cm³, contra a terrestre de 4,4 g/cm³.["
        img_url="https://upload.wikimedia.org/wikipedia/commons/6/68/Artist%27s_conception_of_Sedna.jpg/"
      />

      <hr />
      <Planet
        name="Sedna"
        description="Sedna es el cuerpo menor del sistema solar número 90377;7​n. 3​ concretamente es un objeto transneptuniano. En 2012 se encontraba aproximadamente tres veces más lejos del Sol que Neptuno. Durante la mayor parte de su órbita está incluso más lejos del Sol, con su afelio estimado en 960 unidades astronómicas (ua) —32 veces la distancia de Neptuno—, por lo que es uno de los objetos más lejanos conocidos del sistema solar, que no sean los cometas de período largo.n"
        img_url='https://upload.wikimedia.org/wikipedia/commons/c/c9/JSON_vector_logo.svg'
      />
      <Footers />
    </div>
  );
};

export default Planets;
