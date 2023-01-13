import React,{useEffect , useState} from "react";


function Counter() {

    const [Count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {

            setCount((Count)=>Count + 1)
        },5000)
        
    } )

    return (
<>
        <div>yes i am here</div>
            <div>{Count}</div>
</>            
    );
}

 export default Counter;