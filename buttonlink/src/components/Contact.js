import React, { useContext } from "react";
import {userContext} from '../App'

function Contact() {

    const userValue = useContext(userContext);
  return (
      <>
           <br/>
          CONTACT<h2>This is usestate value { userValue}</h2>
    </>
  );
}

export default Contact;
