import React from 'react'
import { List } from "semantic-ui-react"
import Axios from 'axios'
import { GenerateSql } from "./GenerateSql"

export const HandleSub=({columns})=>{
    const [colum, setCol]=React.useState([]);
    const handler=e=> {
        console.log(colum)
        Axios({
            method: 'post',
            url: 'http://localhost:5000/column',
            data: {
              column: [colum]
            }
          }).then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });
       e.preventDefault();
    }

  return (
      <div>
          <form onSubmit={handler}>
    <List className="list">
    {columns.map(column => {
    return (
        <List.Item>
            <input type="checkbox" value={column} onChange={ (event) =>{setCol(oldArray => [...oldArray,event.target.value])}} />
            <label> {column}</label>
        </List.Item>
    )})
    }
</List>
<button type="submit">Submit Columns</button>
</form>
<GenerateSql />
</div>
  )
}