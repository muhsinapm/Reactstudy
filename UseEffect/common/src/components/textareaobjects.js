import React,{useState} from "react";


  function Textareaobjects () {

    const [Inputs, setInputs] = useState({add:"please enter your current address" , dept:"bcom"})
    
    const handleSubmit = (e) => {
      e.preventDefault();
      document.getElementById('textprint').innerHTML=`Name: ${Inputs.username} , Age: ${Inputs.age} , Address : ${Inputs.add} ,Department :${Inputs.dept}`
      //document.write(`Name: ${Inputs.username} , Age: ${Inputs.age} , Address : ${Inputs.add} ,Department :${Inputs.dept}`)
   }
  
      const handleChange = (event) => {
       
        const name = event.target.name;
        const value = event.target.value;
        setInputs(prevState => ({
          
          ...prevState ,[name]:value
        }))
      }
     
    return (
      <>
        <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="un"> Name :</label>
          <input type="text" name="username" id="un" value={Inputs.username} onChange={handleChange} /><br /><br />
          <label>Age:</label>
          <input type="number" name="age"  value={Inputs.age} onChange={handleChange} /><br /><br />
          <label>address</label>
          <textarea type="text" name="add" cols="30" rows="10" value={Inputs.add} onChange={handleChange} ></textarea><br /><br />
          <select name="dept" value={Inputs.dept} onChange={handleChange}>
                <option value="bca"> bca</option>
                <option value="bba"> bba</option>
                <option value="bcom"> bcom</option>
                <option value="mcom"> mcom</option>
          </select><br /><br />
          <input type="submit"  name=""  id="" />
          <div  id="textprint" ></div>
       </form>
        </div>   
        </> 
    )
        
    } 

   

 export default Textareaobjects;