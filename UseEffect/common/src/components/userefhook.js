import React,{useState,useEffect ,useRef} from "react";


  function Userefhook () {

      const [Input, setInput] = useState("")
      const Count = useRef(0);
      const refValue = useRef(null);

      useEffect(() => {
          Count.current = Count.current + 1;
          refValue.current.value = "hello"
      })

      useEffect(() => {
      
        refValue.current.focus();
    },[])

    return (
        <div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            
            <input type="text"  ref={refValue} /><br/> <br/>  
         <input type="text"  value={Input} onChange={(e)=>setInput(e.target.value)} /><br/><br/>
              
          
                
           second input value is {Input}<br />
            Rendering count: {Count.current}
            <br/><br/><br/><br/><br/><br/><br/>
       </div>      
    )
        
    } 

   

 export default Userefhook;