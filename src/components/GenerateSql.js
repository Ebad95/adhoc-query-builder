import React from 'react'
import Axios from 'axios';

export const GenerateSql=()=>{
    const [sql ,setSql]=React.useState("");
      const Handler=(e)=>{

        Axios({
            method: 'get',
            url: '/generate_sql'
          }).then((response) => {
            console.log(response.data.SQL);
            setSql(response.data.SQL);
          }, (error) => {
            console.log(error);
          });
          e.preventDefault();
        }
       
    return (
        <div class="container-fluid">
            <form onSubmit={Handler}>
          <button type="submit" class="btn btn-success">Generate Sql</button>
          </form>
          <div className="sql">{sql?<p>{sql}</p>:null}</div>
       </div>
    )
}