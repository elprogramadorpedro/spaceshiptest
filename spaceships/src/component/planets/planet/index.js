
import React from "react";
import DescriptionWithLink from "../../descriptionWithLink";
import GrayImg from "../../shared/gray_img";




const Planet = (props) => {
//mapear elementos

const names=['a','b','c','d','e','b']
const satelites = names.map((n)=>
<li>satelites {n}</li>
)

let title;
if(props.title_with_underline)
  title=<h4><u>{props.name}</u></h4>
else
title=<h4>{props.name}</h4>


  return (
    <div>
     {title}
      <DescriptionWithLink description={props.description} link={props.link}/>
      <GrayImg img_url={props.img_url} gray={props.gray}/>
<ul>
  {satelites}
  </ul>
    </div>
  );
};

export default Planet;


/*const Planet = (props) => {
  return (
    <div onClick={()=>props.clickOnPlanet(props.name)}>
      <h4>{props.name}</h4>
      <DescriptionWithLink description={props.description} link={props.link}/>
      <GrayImg img_url={props.img_url}/>
    </div>
  );
};

export default Planet;
*/