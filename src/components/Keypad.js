// Code Keypad Component Here
import React from "react";

function Keypad (){
    function handleKeypadChange(){
        console.log("Entering password...")
    }
    return (
       <div>
        <input 
        type="password" 
        onChange={handleKeypadChange} 
      />
        </div>
      
    )
}

export default Keypad;