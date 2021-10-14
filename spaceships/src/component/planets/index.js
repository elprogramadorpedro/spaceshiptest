import React, { Fragment, useState, useEffect} from "react";
import "rbx/index.css";
import Planet from "./planet";
import Footers from "../footers";

/*
const clickOnPlanet=(name)=>{
    console.log(`clicando planeta: ${name}`)
}
*/

  async function getPlanets() {
    let response= await fetch('http://localhost:3000/api/planets.json')
    let data=await response.json()
    return data;
  }



const Planets =()=> {

  const [planets, setPlanets] = useState([
  ])

  useEffect(()=>{ 
    getPlanets().then(data=>{
      setPlanets(data['planets'])
    })
    }, [])

 /* 
  constructor(props){
    super(props);
    this.state={
      planets:[
       
      ]
    }
  }

  componentDidMount(){
    getPlanets().then(data=>{
      this.setState(state=>({
    planets:data['planets']
      }))
    })
      }
*/  

const removeLast=()=>{
        let new_planets=[...planets]
        new_planets.pop()
        setPlanets(new_planets)
      }

const duplicateLastPlanet= () =>{
  let last_planet=planets[planets.length -1]
  setPlanets([...planets, last_planet])
}

    return (
      <div>


        <Fragment> Planet List</Fragment>
        <hr />
        <button onClick={removeLast}>Remove </button>
        <button onClick={duplicateLastPlanet}>Duplicate </button>   
        
             <hr />
        {planets.map((planet,index)=>
        <Planet
        
          key={index}
          name={planet.name}
          description={planet.description}
          link={planet.link}
          img_url={planet.img_url}
          id={planet.id}
         />
         )}
        
  
      
   
  
        <Footers />
  
        
  
      </div>
    );
  
  
}











export default Planets;
