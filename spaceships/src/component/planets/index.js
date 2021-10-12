import React, { Fragment } from "react";
import "rbx/index.css";
import Planet from "./planet";
import Footers from "../footers";

const Planets = () => {
  return (
    <div>
      <Fragment> Plamet List</Fragment>
      <hr />
      <Planet />
      <hr />
      <Planet />
      <hr />
      <Planet />
      <hr />
      <Footers />
    </div>
  );
};

export default Planets;
