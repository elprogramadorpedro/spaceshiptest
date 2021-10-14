import React, {useState, Fragment } from 'react'




const Form = (props) =>{
const [name, setName]=useState('')
const handleChange=(event)=>setName(event.target.value);


//handleSubmit para adicionar planeta metodo para adicionar planeta
const handleSubmit=event=>{
    props.addPlanet({name:name})
    event.preventDefault();
}


return(
    <Fragment>
        <form onSubmit={handleSubmit}>
        <div>
        <label htmlForm="name">Name:</label>
        <input id="name" type="text" value={name} onChange={handleChange}/>
        </div>
        <br/>
        <input type="submit"/>
        </form>
    </Fragment>
)

}

export default Form
