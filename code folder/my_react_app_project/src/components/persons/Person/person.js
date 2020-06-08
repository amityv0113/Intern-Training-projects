import React from 'react'
// import './Person.css'
const Preson = (arg)=> {
return (<div className="Person_css">
        <p onClick={arg.click} ><mark className="specific_text_color">Name </mark>: {arg.name}</p>
        <p>Id : {arg.Id}</p>
        <p>summary : {arg.summary}</p>
        <p>created_at : {arg.created_at} </p>
        <p>updated_at : {arg.updated_at} </p>
         
    </div>)
};

export default Preson;
