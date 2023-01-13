import React,{useState} from "react";


  function Textareaselect () {

      const [textarea, setTextarea] = useState("This is the content")
      const [select , setSelect] =useState("fiat")

      const handleChange = (event) => {
        setTextarea (event.target.value)
        
      }
      
      const handleChange1 = (event) => {
        setSelect (event.target.value)
        
    }

      const handleSubmit = (e) => {
         // event.preventDefault();
          document.write(` ${textarea}<br/>`);
          document.write(`${select}`);
      }

  

    return (
        <div>
            <select value={select} onChange={handleChange1}>
                <option value="ford"> ford</option>
                <option value="fiat"> fiat</option>
            </select>
            <br /><br/><br/>
            <textarea value={textarea} onChange={handleChange}></textarea>
            <input type="submit" onClick={handleSubmit}></input>
       </div>      
    )
        
    } 

   

 export default Textareaselect;