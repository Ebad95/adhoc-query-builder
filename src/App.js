import React, { useEffect, useState } from 'react'

import { Tables } from "./components/Tables"
import { Columns } from "./components/Columns"


function App() {
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
    <div className="App">
      <div>
          <Tables tables={tables}/>
          <Columns />
      </div>
    </div>
  );
}

export default App;
