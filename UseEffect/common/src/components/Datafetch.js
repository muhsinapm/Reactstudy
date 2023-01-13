import React, { useState } from 'react'
//import axios from 'axios'

function Datafetch() {

    const [jokes, setJokes] = useState([])
    
const getjokes = () => {
  
    fetch('http://official-joke-api.appspot.com/random_joke')
        
        .then((result)=> result.json())
 .then((data) => {

     console.log(data)
     setJokes(data.setup +"..." + data.punchline)
 })
     .catch((err) => {
     
         console.log(err)
 });


}



    return (
      <>
            <button onClick={getjokes}>GET JOKEES</button>
            <br />
            {jokes}
      </> 
  )
}

export default Datafetch