import React from "react";

function InputArea(props) {
  const [inputText, setInputText] = React.useState("");
  function handleChange(event) {
    const newValue = event.target.value;
    // console.log(newValue);
    setInputText(newValue);
  }
  
  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={props.inputText} />
      <button
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
