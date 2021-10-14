
import React from "react";
import DescriptionWithLink from "../../descriptionWithLink";
import GrayImg from "../../shared/gray_img";

async function getSatellites(id){
    let response = await fetch(`http://localhost:3000/api/${id}.json`)
    let data= await response.json()
    return data;
  }



class Planet extends React.Component{
  
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
  }
  

  render(){

    


  let title;
  if(this.props.title_with_underline)
    title=<h4><u>{this.props.name}</u></h4>
  else
  title=<h4>{this.props.name}</h4>
    return (
      <div>
       {title}
        <DescriptionWithLink description={this.props.description} link={this.props.link}/>
        <GrayImg img_url={this.props.img_url} gray={this.props.gray}/>
  <ol>
    {this.state.satellites.map((satellite, index)=>
      <li key={index}>{satellite.name}</li>
    )}

    </ol>
      </div>
    );
}
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