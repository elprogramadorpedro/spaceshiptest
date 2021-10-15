/* eslint-disable no-undef */

import React, { Fragment, useEffect, useState } from "react";
import DescriptionWithLink from "../descriptionWithLink"
import GrayImg from "../shared/gray_img";
import Forms from "./form";

import {useParams} from 'react-router-dom';

async function getPlanet(id) {
  let response = await fetch(`http://localhost:3000/api/${id}.json`);
  let data = await response.json();
  return data;
}

const Planet = () => {
  const [satellites, setSatellites] = useState([]);
  const [planet, setPlanet] = useState({});
let {id} = useParams();

  useEffect(() => {
    getPlanet(id).then((data) => {
      setPlanet(data["data"]);
    });
  }, []);

  const addSatellite = (new_satellite) => {
    setSatellites([...satellites, new_satellite]);
  };

  let title;
  if (planet.title_with_underline)
    title = (
      <h4>
        <u>{planet.name}</u>
      </h4>
    );
  else title = <h4>{planet.name}</h4>;
  return (
    <div>
      {title}
      <DescriptionWithLink description={planet.description} link={planet.link} />
      <GrayImg img_url={planet.img_url} gray={planet.gray} />
      <h4>satellite</h4>
      <hr />
      <Forms addSatellite>{addSatellite}</Forms>
      <hr />
      <ol>
        {satellites.map((satellite, index) => (
          <li key={index}>{satellite.name}</li>
        ))}
      </ol>
    </div>
  );
};

export default Planet;
