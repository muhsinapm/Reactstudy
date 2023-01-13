import React,{createContext ,useState} from "react";
import { BrowserRouter as Router ,Route } from "react-router-dom";
import First from "./components/First";
import About from "./components/About";
import Contact from "./components/Contact";
import Main from "./components/maincontent";

export const userContext = createContext();


function App() {

  const [user, setUser] = useState("Muhsina");

  return (
    <>
      <Main/>
      
      <Router>
        <Route path='/' exact component={First}/>
        <Route path='/About' exact component={About} />
           <userContext.Provider value={user}>
                 <Route path='/Contact' exact component={Contact} />
           </userContext.Provider>  
      </Router>
    </>
  );
}

export default App;
