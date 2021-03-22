import React from 'react'
import Axios from 'axios';

export const GenerateSql=()=>{
    const [sql ,setSql]=React.useState("");
      const Handler=(e)=>{

        Axios({
            method: 'get',
            url: 'http://localhost:5000/generate_sql'
          }).then((response) => {
            console.log(response.data.SQL);
            setSql(response.data.SQL);
          }, (error) => {
            console.log(error);
          });
          e.preventDefault();
        }
       
    return (
        <div>
            <form onSubmit={Handler}>
          <button type="submit">Generate Sql</button>
          </form>
          {sql?<p>{sql}</p>:null}
       </div>
    )
}