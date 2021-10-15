/* eslint-disable no-undef */

import React,{Fragment, useEffect, useState} from "react";
import DescriptionWithLink from "../../descriptionWithLink";
import GrayImg from "../../shared/gray_img";
import Forms from "./form";

async function getSatellites(id){
    let response = await fetch(`http://localhost:3000/api/${id}.json`)
    let data= await response.json()
    return data;
  }



const Planet =(props)=>{
  
  const [satellites, setSatellites] = useState([
  ])

  useEffect(()=>{ 
    getSatellites(props.id).then(data=>{
      setSatellites(data['satellites'])
    })
    }, [])

    const addSatellite=(new_satellite)=>{
      setSatellites([...satellites, new_satellite])
     }
  /*
  constructor(props){
    super(props)
    this.state={
      satellites:[]  //aqui poderias fazer un mock de estado mais  nao precisa. 
    }
  }

  componentDidMount(){
    getSatellites(this.props.id).then(data=>{
      this.setState(state=>({
        satellites:data['satellites']
      }))
    })
  }*/
  

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
        <h4>satellite</h4>
        <hr/>
   <Forms addSatellite>{addSatellite}</Forms>
        <hr/>
  <ol>
    {satellites.map((satellite, index)=>
      <li key={index}>{satellite.name}</li>
    )}

    </ol>
      </div>
    );

}
  











//mapear elementos

/*
const names=['a','b','c','d','e','b']
const satelites = names.map((n)=>
<li>satelites {n}</li>
)*/




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