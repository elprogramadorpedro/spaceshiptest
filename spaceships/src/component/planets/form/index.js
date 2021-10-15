import React, {useState, Fragment } from 'react'

//para limpar camps

const initialState ={
    name:'',
    description:'',
    link:'',
    img_url:''
}




const Form = (props) =>{
const [fields, setFieds]=useState(initialState) //un estads para todos los campos

const handleFieldsChange=(event)=>setFieds({
...fields,
[event.currentTarget.name]: event.currentTarget.value
});


//handleSubmit para adicionar planeta metodo para adicionar planeta
const handleSubmit=event=>{
    props.addPlanet(fields)
    event.preventDefault();
    setFieds(initialState);
}


return(
    <Fragment>
        <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" name="name" value={fields.name}  onChange={handleFieldsChange}/>
        </div>
        <div>
        <label htmlFor="name">Description:</label>
        <input id="description" type="text" name="description" value={fields.description}  onChange={handleFieldsChange}/>
        </div>
        <div>
        <label htmlFor="name">Img_url:</label>
        <input id="img_url" type="text" name="img_url" value={fields.img_url}  onChange={handleFieldsChange}/>
        </div>
        <div>
        <label htmlFor="name">link:</label>
        <input id="link" type="text" name="link" value={fields.link}  onChange={handleFieldsChange}/>
        </div>
        <br/>
        <input type="submit"/>
        </form>
    </Fragment>
)

}

export default Form
