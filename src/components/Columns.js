import React, { useState } from 'react'
import { HandleSub } from "./HandleSub"
import Axios from 'axios'

export const Columns=()=>{
    const [chec, setChec] = useState(false);
    const [column, setColumn]=useState([]);

    const Handler=(e)=> {

        Axios({
            method: 'get',
            url: '/get_columns'
          }).then((response) => {
            console.log(response.data.columns);
            setColumn(response.data.columns)
          }, (error) => {
            console.log(error);
          });
       e.preventDefault();
    }
    console.log(column)

    return (
     <div className="getcol">
         <form onSubmit={Handler}>
        <button type="submit"  class="btn btn-success" onClick={()=>{setChec(!chec)}}>Get Columns</button>
        </form>
        <HandleSub columns={column} />
     </div>
    )
}