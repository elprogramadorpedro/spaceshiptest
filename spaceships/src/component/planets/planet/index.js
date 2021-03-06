/* eslint-disable no-undef */

import React from "react";
import { Link } from "react-router-dom";
import DescriptionWithLink from "../../descriptionWithLink";
import GrayImg from "../../shared/gray_img";





const Planet =(props)=>{
  

  

  let title;
  if(props.title_with_underline)
    title=<h4><u>{props.name}</u></h4>
  else
  title=<h4>{props.name}</h4>
    return (
      <div>
      <Link to={`/planet/${props.id}`}>{title}</Link>
      <DescriptionWithLink description={props.description} link={props.link}/>
      <GrayImg img_url={props.img_url} gray={props.gray}/>
      </div>
    );

}

export default Planet;