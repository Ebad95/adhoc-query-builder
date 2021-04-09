import React from 'react'
import Axios from 'axios';
import { JsonToTable } from "react-json-to-table";

export const Result = () => {
    const [sql, setSql] = React.useState("");
    const Handler = (e) => {

        Axios({
            method: 'get',
            url: '/result'
        }).then((response) => {
            console.log(response.data);
            setSql(response.data);
        }, (error) => {
            console.log(error);
        });
        e.preventDefault();
    }

    return (
        <div>
            <h1 className="hm" class="p-3 mb-2 bg-info text-white">RESULT</h1><hr />
            <div class="container-md">
                <form onSubmit={Handler}>
                    <button type="submit" class="btn btn-success">Generate Result</button>
                </form>
                <JsonToTable json={sql} />
            </div>
            <h1 className="hm" class="p-3 mb-2 bg-info text-white"></h1><hr />
        </div>
    )
}