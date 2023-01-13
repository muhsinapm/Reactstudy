
import React, { useState } from "react";


const Second = () => {
    const [color, setColor] = useState('red');
    const [brand, setBrand] = useState('Ford');
    const [year, setYear] = useState('1964');
    const [model, setModel] = useState('mustang');
    
    return (
        
        < div >
            <peserve>my color is {color} and my model is {model} year is {year} ,brand is { brand}</peserve>
            
        </div >
   )
}

export default Second;