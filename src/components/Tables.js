import React from 'react'
import { List, Header} from "semantic-ui-react"
import Axios from 'axios'

export const Tables = ({ tables }) => {
    const [check, setChecked]=React.useState(false);
    const [table, setTable]=React.useState("");
    const Handler=e=> {
        setChecked(!check)
        console.log(table)
        Axios({
            method: 'post',
            url: '/table',
            data: {
              table: [table]
            }
          }).then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });
       e.preventDefault();
    }
    return (
        <div className="table">
            <Header style={{backgroundColor:"blue"}}>Tables</Header><hr />
            <form onSubmit={Handler}>
        <List className="list">
            {tables.map(table => {
            return (
                <List.Item key={table.id}>
                    <input type="checkbox" value={table} defaultChecked={false} onChange={ (event) =>{setTable(event.target.value)}}/>
                    <label> {table}</label>
                </List.Item>
            )})
            }
        </List>
        <button type="submit">Submit</button>
        </form>
        </div>
    )
}