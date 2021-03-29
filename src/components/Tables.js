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
           <h1 className="hm" class="p-3 mb-2 bg-info text-white">Tables</h1><hr />
            <form onSubmit={Handler}>
        <List className="list">
            {tables.map(table => {
            return (
                <List.Item key={table.id}>
                    <input type="checkbox" class="form-check-input" value={table} defaultChecked={false} onChange={ (event) =>{setTable(event.target.value)}}/>
                    <label>{table}</label>
                </List.Item>
            )})
            }
        </List>
        <button type="submit" class="btn btn-success">Submit</button>
        </form>
        </div>
    )
}