import React from 'react'
import { List, Header} from "semantic-ui-react"


export const Tables = ({ tables }) => {
    const [check, setChecked]=React.useState(false);

    function Handler(event) {
        setChecked(!check)
        const recipeUrl = '/table';
        console.log(event.target.value)
        const postBody = {
            table: event.target.value
        };
        const requestMetadata = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postBody)
        };
    
        fetch(recipeUrl, requestMetadata)
            .then(res => res.json())
            .then(recipes => {
                console.log(recipes)
            });
    }
    return (
        <div className="table">
            <Header style={{backgroundColor:"blue"}}>Tables</Header><hr />
        <List className="list">
            {tables.map(table => {
            return (
                <List.Item key={table.id}>
                    <input type="checkbox" value={table} defaultChecked={check} onChange={Handler}/>
                    <label> {table}</label>
                </List.Item>
            )})
            }
        </List>
        </div>
    )
}