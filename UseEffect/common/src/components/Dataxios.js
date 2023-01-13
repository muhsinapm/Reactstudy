

import React, { useState ,useEffect} from 'react'
import axios from 'axios'


function Dataxios() {

    const [Posts, setPost] = useState([])
    
useEffect(() => {
  
    axios.get('https://jsonplaceholder.typicode.com/photos')
 .then((result) => {

     console.log(result)
     setPost(result.data[6])
 })
     .catch((err) => {
     
         console.log(err)
 });


}, [])



    return (
      <>
      Data Fetching using axios
            <ul>
              

                <li>{ Posts.title}</li>

                
              
              
      </ul>
      </> 
  )
}

export default Dataxios


/*FOR MULTI LINE ACCESS
import React, { useState, useEffect } from 'react'
import axios from 'axios'


function Dataxios() {

    const [Posts, setPost] = useState([])
    
useEffect(() => {
  
    axios.get('https://jsonplaceholder.typicode.com/photos')
 .then((result) => {

     console.log(result)
     setPost(result.data)
 })
     .catch((err) => {
     
         console.log(err)
 });


}, [])



    return (
      <>
      <div>Data Fetching using axios</div>
            <ul>
                {Posts.map(post => (

                    <li key={post.id}>{post.id}-{post.title} </li>
                    
                ))}
              
      </ul>
      </> 
  )
}

export default Dataxios

*//* <img alt="try images" src={post.url }/>*/
