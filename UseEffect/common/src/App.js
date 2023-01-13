import "./App.css"
import Counter from "./components/counter"
import CounterButton from "./components/counterbutton"
import Singlefieldform from "./components/singlefieldform"
import Multiplefieldform from "./components/multiplefieldform"
import Textareaselect from "./components/textareaselect"
import Textareaobjects from "./components/textareaobjects"
import First from "./components/usecontext"
import Userefhook from "./components/userefhook"
import Usereducerhook from "./components/Usereducerhook"
import Usereducermultihook from "./components/usereducermultihook"
import Reducerobject from "./components/reducerobject"
import Memoreact from "./components/memoreact"
import { useState } from "react"
import Parent from "./components/callback/parent"
import Memohook from "./components/memohook"
import Dataxios from "./components/Dataxios"
import Datafetch from "./components/Datafetch"

function App() {
  console.log("Parent component")
  const [Name , setName]= useState('')
  return (
    <>
      <h1>MUHSINA</h1>
      <div>
         <p>shdadhas sbdahsdahsd hjasdiuashiu</p>
      </div>
      <Counter />
      <CounterButton />
      <Singlefieldform />
      <Multiplefieldform />
      <Textareaselect />
      <Textareaobjects />
      <First />
      <Userefhook />
      <Usereducerhook />
      <Usereducermultihook />
      <br/><br/><br/><br/><br/><br/>
      <Reducerobject />
      <br/><br/><br/><br/><br/><br/> <br/><br/><br/><br/><br/><br/> <br/><br/><br/><br/><br/><br/>
      <h1>memo example</h1>
      <div>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <h3>Name is {Name}</h3>
        <Memoreact/>
      </div>

      <div>
      <br/><br/><br/><br/><br/><br/><br/><br/>
      <h1>CALL BACK</h1>
        <Parent />
      </div>

      <div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <h1>Memo hook example</h1>
        <Memohook />
      </div>

      <div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <h1>Axios</h1>
        <Dataxios />
      </div>
      <div>
       <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <h1>Fetching</h1>
        <Datafetch />
        <br /><br /><br /><br />
      </div>
    </>
   
  );
}

export default App;
