import React from "react";
import "../styles.css"

const FAQ = () => {
     
    return <div className="App">
    <header className="App-header">
        <p ><b><i>
        Frequently Asked Questions</i></b>
        </p>
        <p>
            
        </p>
    </header>
    
    <div className="App-text2" >
        <b>Q: &ensp;How do I add a complaint?</b> 
        <p>
            A: &ensp;Use the "Add Entry" tab on the left
        </p>
        <br></br>
        <b>Q: &ensp;How do I view all the current complaints?</b> 
        <p>
            A: &ensp;Use the "Dashboard" tab on the left
        </p>
        <br></br>
        <b>Q: &ensp;What if I still need support?</b> 
        <p>
            A: &ensp;Contact me using the info on the "Contact" tab
        </p>
    </div>
    </div>;
};

export default FAQ;