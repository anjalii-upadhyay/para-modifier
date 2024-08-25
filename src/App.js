import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextForm";

function App() {
    return (
        <>
            <Navbar title="Para Modifier" />
            <div className="container">
                <TextArea
                    heading="Play around with your text below!"
                />
            </div>
        </>
    );
}

export default App;
