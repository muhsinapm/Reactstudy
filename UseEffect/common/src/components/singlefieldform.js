import React,{useState} from "react";


  const Singlefieldform = () => {

      const displayName = (event) => {
          event.preventDefault();
        document.getElementById("name").innerHTML=`your name is ${Name}`
       // document.write(`${Name}`)
    }

    const [Name, setName] = useState("");

    return (
        <div>
            <form onSubmit={displayName}>
                <label> Enter name: </label>
                <input type="text" value={Name} onChange={(event) => setName(event.target.value)} />
                <input type="submit" />
                <div id="name"></div>
            </form>
       </div>      
    )
        
    } 

   

 export default Singlefieldform;