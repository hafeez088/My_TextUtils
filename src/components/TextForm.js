import React, { useState } from "react";
//import PropTypes from 'prop-types'

export default function TextForm(props) {
  const handleUClik = () => {
    //console.log("Uppercase clicked");
    let newtext = text.toUpperCase()
    setText(newtext);
    props.showAlert("Convert to UpperCase" , "success");
  }

  const handleLClik = () => {
    //console.log("Uppercase clicked");
    let newtext = text.toLowerCase()
    setText(newtext);
    props.showAlert("Converted to LowerCase" , "success");
  }

  const handleClear = () => {
    let newtext = '';
    setText(newtext)
    props.showAlert("Text Cleared" , "success");
  }

  const handleOnChange = (event) => {
    //console.log("on change");
    setText(event.target.value);
  }

  const handlecopy = () => {
    var text = document.getElementById("myBox")
    text.select()
    //text.setSelectionRange(0 , 9999)
    navigator.clipboard.writeText(text.value)
    props.showAlert("Text Copied" , "success");
  }

  const handleExtraSpaces = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "))
    props.showAlert("Extra Spaces Removed" , "success");
  }


  const [text, setText] = useState("");
  return (
    <>
    <div className="container" style = {{color: props.mode === 'light'?'#042743':'white'}}>
      <h3>{props.heading}</h3>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="6"
          onChange={handleOnChange}
          style = {{backgroundColor: props.mode === 'light'?'white':'grey', color: props.mode === 'light'?'#042743':'white'}}
          value={text}
        ></textarea>
      </div>

      <button className="btn btn-primary" onClick={handleUClik}>
        Convert to UpperCase
      </button>

      <button className="btn btn-primary mx-2" onClick={handleLClik}>
        Convert to LowerCase
      </button>

      <button className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>
      <button className="btn btn-primary mx-2" onClick={handlecopy}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    </div>

    <div className="container my-3" style = {{color: props.mode === 'light'?'#042743':'white'}}>
        <h5>Text Summary</h5>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read above text</p>

        <h5>Preview</h5>
        <p>{text.length>0?text:"Enter Something in text-box to preview it here"}</p>

    </div>
    </>
  );
}
