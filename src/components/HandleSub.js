import React from 'react'
import { List } from "semantic-ui-react"
import Axios from 'axios'
import { GenerateSql } from './GenerateSql'
import { Conditions } from './Conditions'

export const HandleSub=({columns})=>{
    const [colum, setCol]=React.useState([]);
    const handler=e=> {
        console.log(colum)
        Axios({
            method: 'post',
            url: '/column',
            data: {
              column: colum
            }
          }).then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });
       e.preventDefault();
    }

  return (
      <div className="Col" class="container-md">
        <h1 className="hm" class="p-3 mb-2 bg-info text-white">Columns</h1><hr />
          <form onSubmit={handler}>
    <List className="list">
    {columns.map(column => {
    return (
        <List.Item>
            <input type="checkbox" class="form-check-input" value={column} onChange={ (event) =>{setCol(oldArray => [...oldArray,event.target.value])}} />
            <label> {column}</label>
        </List.Item>
    )})
    }
</List>
<button type="submit" class="btn btn-success">Submit Columns</button>
<hr />
</form>
<Conditions columns={columns} />
</div>
  )
}