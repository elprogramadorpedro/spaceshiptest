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
        description="Mercurio es el planeta del sistema solar más cercano al Sol y el más pequeño. Forma parte de los denominados planetas interiores y carece de satélites naturales al igual que Venus. Se conocía muy poco sobre su superficie hasta que fue enviada la sonda planetaria Mariner 10 y se hicieron observaciones con radar y radiotelescopios. Posteriormente fue estudiado por la sonda MESSENGER de la NASA y actualmente la astronave de la Agencia Europea del Espacio (ESA) denominada BepiColombo, lanzada en octubre de 2018, se halla en vuelo rumbo a Mercurio a donde llegará en 2025 y se espera que aporte nuevos conocimientos sobre el origen y composición del planeta, así como de su geología y campo magnético."
        link="https://es.wikipedia.org/wiki/Mercurio_(planeta)"
        img_url="https://upload.wikimedia.org/wikipedia/commons/6/68/Artist%27s_conception_of_Sedna.jpg/"
      />

      <hr />
      <Planet
        name="Sedna"
        description="Sedna es el cuerpo menor del sistema solar número 90377;7​n. 3​ concretamente es un objeto transneptuniano. En 2012 se encontraba aproximadamente tres veces más lejos del Sol que Neptuno. Durante la mayor parte de su órbita está incluso más lejos del Sol, con su afelio estimado en 960 unidades astronómicas (ua) —32 veces la distancia de Neptuno—, por lo que es uno de los objetos más lejanos conocidos del sistema solar, que no sean los cometas de período largo.n. 4​n. 5​ La órbita excepcionalmente larga y elongada de Sedna, que tarda unos 11 400 años en completarse, y su lejano punto de máxima aproximación al Sol, a 76 ua, han dado lugar a mucha especulación en cuanto a su origen."
        link="https://es.wikipedia.org/wiki/(90377)_Sedna"
        img_url='https://upload.wikimedia.org/wikipedia/commons/c/c9/JSON_vector_logo.svg'
      />
      <Footers />
    </div>
  );
};

export default Planets;
