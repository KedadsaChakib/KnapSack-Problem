import React from "react";
import ClearIcon from "@material-ui/icons/Clear";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note" style={{
      position: 'relative',
      backgroundColor: props.selected ? '#d2c99e' : '#fff',
      color: props.selected ? '#fff' : '#000',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0px',  // Optional padding for better spacing
    }}>
      <div style={{ textAlign: 'center' }}>
        <br />
        <h1>{props.name}</h1>
        <p>{props.weight} Kg</p>
        <p>{props.value} $</p>
      </div>
      <button
        onClick={handleClick}
        style={{
          position: 'absolute',
          top: '3px',  // Adjust top positioning as needed
          right: '0px',  // Adjust right positioning as needed
          background: 'transparent',
          border: 'none',
        }}
      >
        <ClearIcon fontSize="small" /> {/* Adjust the icon size if needed */}
      </button>
    </div>
  );
}

export default Note;
