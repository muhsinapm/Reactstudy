import React,{useReducer } from "react";
import reducer from "./usereduce/reducerobjectfun";


const initialvalue = {
    value :0
};

function Reducerobject() {

    const [state , dispatch] = useReducer( reducer , initialvalue);

   
    return (
        <div style={{margin:'auto', width:'400px'}}>
            
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <button onClick={() => dispatch({
                type: 'change-value',
                payload : 1
            })}>Increment</button><br /><br/>
            <div style={{ width: '50px', margin: 'auto', border: '1px solid black', height: '100px', backgroundColor: state.color }}>
                {state.value}
            </div>
            <br /><br />
            <button onClick={() => dispatch({
                type: 'change-value',
                payload : -1
            })}>Decrement</button><br /><br/>
            <button onClick={() => dispatch({
                type: 'change-color',
                payload : 'green'
            })}>GREEN</button><br />
            <button onClick={()=>dispatch({
                type: 'change-color',
                payload : 'red'
            })}>RED</button><br />
</div>            
    );
}

 export default Reducerobject;