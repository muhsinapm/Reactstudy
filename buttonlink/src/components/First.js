import React from "react";
import {Link} from 'react-router-dom'
function First() {
  return (
      <>
          <h1>HELLO WELCOME</h1>
          <h2>ABOUT</h2><button><Link to="/About">ABOUT</Link></button>
          <h2>CONTACT</h2><button><Link to= "/Contact">CONTACT</Link></button>
    </>
  );
}

export default First;
