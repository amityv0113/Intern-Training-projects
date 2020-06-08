import React from 'react'
import './table.css'
const RenderRow = (props) =>{
    return props.data_1.map((val,index)=>{
    return <tr key={index}>
            <td>{val.id}</td>
            <td>{val.name}</td>
            <td>{val.summary}</td>
            <td>{val.user_id}</td>
            <td>{val.created_at}</td>
            <td>{val.updated_at}</td>


            </tr>
    })
}
    

 export default RenderRow;