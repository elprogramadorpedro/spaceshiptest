import React, { Fragment } from 'react'
import "rbx/index.css";



const DescriptionWithLink=(props)=>{
    if(props.link){
    return(
        <Fragment>
        <p>{props.description}</p>
        <a href={props.link}>{props.link}</a>
        </Fragment>)
        }else{
            return(
             <u><p>{props.description}</p></u>
             )
        }
    
}

export default DescriptionWithLink

