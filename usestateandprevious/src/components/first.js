
import React, { useState } from "react";


const Car = () => {
    const [color, setColor] = useState('red')
    
    return (
        
        < div >
            <p>my color is { color}</p>
            <button onClick={() => setColor("blue")}>CLick here</button>
        </div >
   )
}

export default Car;