import React, { useMemo, useState } from 'react'

function Memohook() {

    const [Number, setNumber] = useState(0)
    const [color, setColor] = useState(false)
    
    const product = useMemo( () => {
        for (let i = 0; i < 1000000000; i++){}
        return Number * 2
    },[Number])
    /*
     const product = () => {
        for (let i = 0; i < 1000000000; i++){}
        return Number * 2
    }
    */

    const changeTheme = {
        backgroundColor: color ? 'black' : 'white',
        color : color ? 'white' : 'black'
    }
  return (
      <div>
          <input type="number" value={Number} onChange={(e)=>setNumber(e.target.value)} />
          <button onClick={()=>setColor(prevColor => !prevColor)}>Change Theme</button>
          <div style={changeTheme}>{product}</div>
    </div>
  )
}

export default Memohook