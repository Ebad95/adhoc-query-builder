import React, { useEffect, useState } from 'react'
import { List } from "semantic-ui-react"

export const HandleSub=()=>{
    const [columns, getColumns] = useState([]);
   
    const recipeUr = 'http://localhost:5000/get_columns';
    const requestMetadat = {
        mode:'no-cors',
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
    }
    fetch(recipeUr, requestMetadat)
            .then(res => res.json())
            .then(recipes => {
                console.log(recipes)
            });
    

  return (
    <List className="list">
    {columns.map(column => {
    return (
        <List.Item>
            <input type="checkbox" value={column} />
            <label> {column}</label>
        </List.Item>
    )})
    }
</List>
  )
}