/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import "rbx/index.css";
import "./style.css";

const GrayImg = (props) => {
  return (
    <img
      className={props.gray ? 'gray-img': 'color-img'} src={props.img_url}
    />
  );
};

export default GrayImg;
