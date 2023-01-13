import { useState } from 'react';
import './App.css';
import { RiDeleteBin2Line } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";

function App() {

  const [Input, setInput] = useState('')
  const[Todos,setTodos] =useState([])

  const handleSubmit = () => {
    setTodos([...Todos, Input])
    setInput('')
      }

    const handleChange = (e) => {
        setInput(e.target.value) 
        
    }

  return (
    <>
      <h4 class="tittle mt-3">TO DO APP</h4>
      <br />
      <div class="d-flex   justify-content-center">
        <input type="text" class="input mr-2"   name="todoinput"  onChange={handleChange}></input>
        <button type="reset" class="button  align-center" onClick={handleSubmit}>ADD</button>
        </div>
      <dl class="list mb-3">

       {
          Todos.map((value) =>
            <li class="list_item bg-secondary  m-2 pl-2 ">{value}
           <span class="icon"><RiDeleteBin2Line/></span>
           <span><AiFillEdit/></span>
           </li>
          )
        }
        
        </dl>
        
    </>
  );
}

export default App;
