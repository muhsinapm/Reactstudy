import React,{useState} from "react";


  function Multiplefieldform () {

    const [Input , setInput] =useState({})

      const handleSubmit = (event) => {
          event.preventDefault();
         // document.write(`your Name is ${Input.username}<br/>`);
          //document.write(`your age is ${Input.age}`);
        document.getElementById('content').innerHTML = `Name: ${Input.username} , Age: ${Input.age} `;
      }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput(prevState =>({...prevState , [name] : value }))
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label> Enter name: </label>
                <input type="text" name="username" value={Input.username} onChange={handleChange} /><br/>
                <label> Enter your age: </label>
                <input type="number" name="age" value={Input.age} onChange={handleChange} /><br/>
          <input type="submit" />
          <div  id="content" ></div>
            </form>
       </div>      
    )
        
    } 

   

 export default Multiplefieldform;