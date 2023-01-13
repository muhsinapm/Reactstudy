import React from "react"
import './first.css'
import { Link } from "react-router-dom"

const Car =() =>{

    const myStyle = {
        color: "white",
        backgroundColor: "blue",
        fontSize:"20px"
    }


    return (
        <div>
            <Link to="/home">home</Link><br />
            <Link to= "/next">next1</Link>
            <h1>IN LINE style</h1>
            <h1 id="style1" style={myStyle}>HAI MUHSINA</h1>
            <h1>external style</h1>
            <div id="head">m</div>
            <h1>button click style</h1>
           
        
      </div>
     
    );
  }
  
  export default Car;


  /*  <button onClick={document.getElementById('style1').style.color='red'}>click here</button>*/