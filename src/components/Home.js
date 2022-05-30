import React from "react";
import '../styles/Home.css'
import Services from './Services.js'

function Home() {
    return(
        <div className="homeDiv">
            <Services />
            <div className="homeM">
                <h1> Home</h1>
            </div>
        </div>
    );
}

export default (Home)