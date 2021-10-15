import React, {useState, Fragment } from 'react'

const initialState={
    name:''
}

const Forms = (props) =>{
const [fields, setFieds]=useState(initialState);

const handleFieldsChange=(event)=>setFieds({
    ...fields,
    [event.currentTarget.name]: event.currentTarget.value
    });
    
const handleSubmit = event=>{
    props.addSatellite(fields);
    event.preventDefault();
    setFieds(initialState)
}

return(
    <Fragment >
        <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="name">Name:</label>
        < input id="name" name="name" type="text" value={fields.name} onChange={handleFieldsChange}/>
        </div>
        < input type="submit"/>
        </form>
    </Fragment>
)

}

export default Forms
