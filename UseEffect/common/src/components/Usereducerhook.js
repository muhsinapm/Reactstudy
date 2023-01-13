import React,{useReducer } from "react";

function reducer (state , action ){
    if ( action === 'Increment' )
    {
        return state + 1;
    }
else
{ 
        return state - 1;
    }
}

function Usereducerhook() {

    const [value , dispatch] = useReducer( reducer , 0);

   
    return (
        <>
            
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <button onClick={()=>dispatch('Increment')}>Increment</button><br /><br/>
            {value}<br/><br/>
            <button onClick={()=>dispatch('Decrement')}>Decrement</button><br />
</>            
    );
}

 export default Usereducerhook;