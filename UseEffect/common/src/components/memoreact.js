import React, { memo, useState } from "react";


function Memoreact() {

    const [Count, setCount] =useState(0)
    console.log(Count ,"Counter")
    
    return (
        <div>
            <h3>Counter value : {Count}</h3>
            <button onClick={()=>setCount(Count+1)}>Increment</button>
        </div>


    )
}

//const newComp = React.memo(Memoreact)

export default memo(Memoreact)