import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState("Enter text here");

    const handleOnChange = (event) => {
        // console.log("Inside onChange");
        setText(event.target.value);
    };
    const handleUpClick = () => {
        // console.log("Inside onClick");
        let newText = text.toUpperCase();
        setText(newText);
        // props.meth("wvrgw", "EWVRF")
    };
    const handleLoClick = () => {
        // console.log("Inside onClick");
        let newText = text.toLowerCase();
        setText(newText);
    };
    const handleClearClick = () => {
        // console.log("Inside onClick");
        setText('');
    };

    return (
        <>
            <div className="my-5 container">
                <h1>{props.heading}</h1>
                <div className="form-group mb-3">
                    <textarea
                        value={text}
                        className="form-control"
                        id="myBox"
                        rows="8"
                        onChange={handleOnChange}
                    ></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>
                    Convert to Uppercase
                </button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>
                    Convert to Lowercase
                </button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>
                    Clear Text
                </button>
            </div>
            <div className="container my-5">
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{text.split(" ").length * 0.1692} Minutes to Read</p>
            </div>
            <div className="container my-5">
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}
