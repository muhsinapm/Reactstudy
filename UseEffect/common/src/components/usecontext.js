import React, { createContext, useState , useContext } from "react";

const userContext = createContext();

function First() {
    const[User , setUser] = useState ("muhsina")
    
    return (
        <>
             <div>
                <br /><br /><br /><br /><br /><br /><br /><br />
                <h1>first {User }</h1>
            <userContext.Provider value={User}>
            <Second/>
            </userContext.Provider>
            </div>
        </>
    )
}

function Second() {
    
    return (
        
        <div>

            second<Thired/>
        </div>
    )
}

function Thired() {
    
    return (
        
        <div>

      thired<Forth/>
        </div>
    )
}

function Forth() {
    const content = useContext(userContext)
    
    return (
        
        <div>
            <h2>forth {content}</h2> 
            
        </div>
    )
}


   

 export default First;