import React from "react";
import Car from "./components/first";
import Second from "./components/second";
import Thired from "./components/thired";

function App() {
  return (
    <>
      <h1>useState</h1>
      <Car />
      <Second />
      <h1>previousState</h1>
      <Thired/>
    </>
   
  );
}

export default App;
