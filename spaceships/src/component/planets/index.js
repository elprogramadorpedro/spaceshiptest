import React, { Fragment } from "react";
import "rbx/index.css";
import Planet from "./planet";
import Footers from "../footers";

const clickOnPlanet=(name)=>{
    console.log(`clicando planeta: ${name}`)
}


const Planets = () => {
  return (
    <div>
      <Fragment> Planet List</Fragment>
      <hr />
      
     
      <hr />
      <Planet clickOnPlanet={clickOnPlanet}
        name="Mercurio"
        
        link="https://es.wikipedia.org/wiki/Mercurio_(planeta)"
        img_url="https://upload.wikimedia.org/wikipedia/commons/c/c9/JSON_vector_logo.svg"
        title_with_underline={true}
       
      />

      <hr />
      <Planet clickOnPlanet={clickOnPlanet}
        name="Sedna"
        description="Sedna es el cuerpo menor del sistema solar número 90377;7​n. 3​ concretamente es un objeto transneptuniano. En 2012 se encontraba aproximadamente tres veces más lejos del Sol que Neptuno. Durante la mayor parte de su órbita está incluso más lejos del Sol, con su afelio estimado en 960 unidades astronómicas (ua) —32 veces la distancia de Neptuno—, por lo que es uno de los objetos más lejanos conocidos del sistema solar, que no sean los cometas de período largo.n. 4​n. 5​ La órbita excepcionalmente larga y elongada de Sedna, que tarda unos 11 400 años en completarse, y su lejano punto de máxima aproximación al Sol, a 76 ua, han dado lugar a mucha especulación en cuanto a su origen."
        
        img_url='https://upload.wikimedia.org/wikipedia/commons/c/c9/JSON_vector_logo.svg'
        gray={true}
      />


      <Footers />

      

    </div>
  );
};

export default Planets;
