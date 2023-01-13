import React, { useCallback, useState } from "react";
import Title from "./Title";
import Counter from "./counter"
import Button from "./Button";



function Parent() {
  const [Age, setAge] = useState(21);
  const [Salary, setSalary] = useState(50000);

  const IncrementAge =useCallback(() =>{
    setAge(Age + 1)
 },[Age]) 
  const IncrementSalary =useCallback(() =>{
    setSalary(Salary + 1000)
 },[Salary]) 
  return (
    <div height="100px !important">
      <Title />
      <Counter text='Age' count = {Age}/>
      <Button handleClick={IncrementAge}>Increment Age</Button>
      <Counter text='Salary' count = {Salary}/>
      <Button handleClick={IncrementSalary}>Increment Salary</Button>
    </div>
  )
}

export default Parent