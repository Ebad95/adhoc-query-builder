import React, { useEffect, useState } from 'react'

import { Tables } from "./Tables"
import { Columns } from "./Columns"



export const Home=()=> {
  const [tables, getTables] = useState([]);

  useEffect(() => {
    fetch('/get_tables').then(response => 
      response.json().then(data => {
        getTables(data.tables);
      })
      );
  }, []);

  

  console.log(tables)

  return (
    <div className="App" class="container-sm">
      <header className="header">
      <nav class="navbar navbar-light bg-light">
  <div class="container-fluid" class="p-3 mb-2 bg-info text-white">
    <span class="navbar-brand mb-0 h1">Ad Hoc Query Builder</span>
  </div>
</nav>
      </header>
      <div>
          <Tables tables={tables}/>
          <Columns />
      </div>
    </div>
  );
}

