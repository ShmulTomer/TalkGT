import React from "react";
import "../styles.css"
import AddEntry from "../components/AddEntry";

const Add = () => {
    return <div className="App">
        <div className="App-header">  
            <p ><b><i>
            Add your Complaint</i></b>
            </p>
        </div>

        <div className="App-text">
            <AddEntry />

            <p>
                
            </p>
        </div>
    </div>;
};

export default Add;