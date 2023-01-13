import React from 'react';
import {BrowserRouter ,Route} from 'react-router-dom'
import Car from './first';
import Home from './components/home';
import Next from './components/next';

function App() {
  return (
    <>
      <BrowserRouter> 
        <Route exact path="/" component={Car}/>
        <Route exact path="/home" component={Home} />
        <Route exact path="/next" component={Next}/>
      </BrowserRouter>
    </>
   
  );
}

export default App;


/* <h1>HAI MUHSINA</h1>
      <Car/>*/