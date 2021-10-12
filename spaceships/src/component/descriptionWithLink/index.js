import React from 'react'
import "rbx/index.css";
const DescriptionWithLink=(props)=>{
    return(
        <div>
        <p>{props.description}</p>
        <a href={props.link}>{props.link}</a>
        </div>
    )
}

export default DescriptionWithLink