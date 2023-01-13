import React,{useReducer } from "react";
import reducer from "./usereduce/reducerfunction";


const initialvalue = {
    value :0
};

function Usereducermultihook() {

    const [state , dispatch] = useReducer( reducer , initialvalue);

   
    return (
        <div style={{margin:'auto', width:'400px'}}>
            
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <button onClick={()=>dispatch('Increment')}>Increment</button><br /><br/>
            <div style={{width:'50px' , margin:'auto', border:'1px solid black', height:'100px', backgroundColor: state.color}}>{state.value }</div>
            <br /><br />
            <button onClick={() => dispatch('Decrement')}>Decrement</button><br /><br/>
            <button onClick={() => dispatch('green')}>GREEN</button><br />
            <button onClick={()=>dispatch('red')}>RED</button><br />
</div>            
    );
}

 export default Usereducermultihook;