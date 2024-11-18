import React from "react";
import Palindrome from "../Execceries/Palindrome";
import LeafYear from "../Execceries/LeafYear";
import Regex from "../Execceries/Regex";

function Execceries() {
  return (
    <div className="py-20 bg-gray-50">
      <h1>Execceries to be displayed</h1>
    
      <div className="margin"> 
      <Palindrome/>
      </div>
      <div className="margin">
      <LeafYear/>
      </div>
      <div className="margin">
        <Regex/>
      </div>
     
    </div>
  );
}

export default Execceries;
