import React, { useState } from 'react'
import { HandleSub } from "./HandleSub"

export const Columns=()=>{
    const [chec, setChec] = useState(false);
   
    return (
     <div>
        <button onClick={()=>{setChec(!chec)}}>Get Columns</button>
        {chec?
        <HandleSub />:null
        }
     </div>
    )
}