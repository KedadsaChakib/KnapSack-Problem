import React, { useState, useEffect } from "react";
import HighlightIcon from "@material-ui/icons/Highlight";
import InputSlider from "./Slider";
import { Button } from "@material-ui/core";

function Header({ onSolve, updateMaxWeight }) {
  // Define a state variable to store the input value
  const [inputValue, setInputValue] = useState('');

  // Function to handle input change
  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    // Call the function to update the max weight in parent component
    updateMaxWeight(value);
  };

  return (
    <header>
        <img className="image" src="backpack2.png" style={{ height: "50px",width: "50px" }} alt="backpack icon" />
      <h1>
        Problème du sac à dos
      </h1>
      <div className="inputSlider">
        <input
          type="number"
          placeholder="Entrer le poids maximal"
          value={inputValue}
          onChange={handleInputChange}
          style={{
            width:'195px',
            marginTop :'0px',
            padding: '10px',
            paddingRight:'0px',
            backgroundColor: '#FFFFFF',
            color: '#000',
            border: 'none',
            // borderBlock:'solid grey 0.1px',
            borderRadius: '4px 0px 0px 4px',
            height:"49px",
            fontFamily:"'Montserrat', sans-serif",
          }}
        />
      </div>
      <Button
        style={{ backgroundColor: '#265C4B', color: '#fff', opacity:'80%' ,borderRadius :'0px 4px 4px 0px', marginRight: '50px'}}
        onClick={onSolve}
      >
        Résoudre
      </Button>
    </header>
  );
}

export default Header;
