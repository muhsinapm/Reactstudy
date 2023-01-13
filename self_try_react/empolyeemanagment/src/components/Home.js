import React from "react";


function Home() {


    const handleClick=()=>{
        localStorage.clear();
        window.location.reload();
    }

    return (
        <>
            <h1>HOME PAGE</h1><br />
            <button onClick={handleClick}>Logout</button>
        </>

    );
}


export default Home;