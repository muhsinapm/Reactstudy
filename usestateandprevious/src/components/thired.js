
import React, { useState } from "react";


const Thired = () => {
    const [Car, setCar] = useState({
        brand: "Ford",
        model: "mustang",
        year: "1964",
        color:"blue"
        
    })

    const UpdateColor = () => {
        setCar(previousState => {
            return{...previousState ,color :"red"}
        })
    }
    
    return (
        
        < div >
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <p>It is {Car.brand} {Car.model} from { Car.year}</p>
            <p>my color is { Car.color}</p>
            <button onClick={UpdateColor}>CLick here</button>
            <br/> <br/><br/><br/><br/><br/><br/><br/><br/>
        </div >
   )
}

export default Thired;