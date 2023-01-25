import React,{useState} from 'react'


export default function TextForm(props) {
    const [text,setText] = useState("");

    const handleUpClick = () => {
        let newText =text.toUpperCase();
        setText(newText);
        props.showAlert("Convert into Upper case","success");
    }
    const handleOnchange = (event) => {
        setText(event.target.value);
    }
    const handleLowerCase = () =>{
        let lowerCase = text.toLowerCase();
        setText(lowerCase);
        props.showAlert("Convert into lower case","success");
    }
    const clearText =() =>{
      const textClear = '';
      setText(textClear);
      props.showAlert("Clear text","success");
    }
    const copyText = () =>{
      var textArea = document.getElementById('myBox');
      // alert(textArea.value);
      textArea.select();
      navigator.clipboard.writeText(textArea.value)
      props.showAlert("Copy text","success");
    }
    const removeExtraSpaces = () => {
      let rmvSpaceText = text.split(/[  ]+/);
      setText(rmvSpaceText.join(" "));
      props.showAlert("Remove Extra Spaces","success");
    }
  return (
    <div className="container">
    <div>
        <h1>{props.heading} </h1>
        <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
        {/* this line is for dark mode or light mode  */}
          <textarea className="form-control" id="myBox" rows="8" style={{backgroundColor:(props.mode==="light"?"white":"#042743"),color:(props.mode==="light"?"black":"white")}} value={text} onChange={handleOnchange}></textarea>
          {/* this line is for green mode and white mode and you can change color accourding to youeself */}
          {/* <textarea className="form-control" id="myBox" rows="8" style={{backgroundColor:(props.color.bgcolor),color:(props.color.color)}} value={text} onChange={handleOnchange}></textarea> */}
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-4" onClick={handleLowerCase}>Convert to Lowercase</button>
        <button className="btn btn-primary" onClick={clearText}>Clear Text</button>
        <button className="btn btn-primary mx-4" onClick={copyText}>Copy</button>
        <button className="btn btn-primary" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length>1?text.split(" ").length:0} Words,{text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} : Read Time</p>
        <h3> {text} : Preview</h3>
    </div>
    </div>
   
  )
}
