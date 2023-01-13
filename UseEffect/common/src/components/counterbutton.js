import React,{useEffect , useState} from "react";


function CounterButton() {

    const [Count, setCount] = useState(0);
   

    useEffect(() => {
       
              
    },[Count] )

    return (
<>
        
            <div>
                Count :{Count}<br />
                <button onClick={() => setCount(Count + 1)}>Increment</button><br />
               
            </div>
</>            
    );
}

 export default CounterButton;