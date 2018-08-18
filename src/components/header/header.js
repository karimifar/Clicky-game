import React from "react";
import "./header.css";

const header = props => (
    <div className = "header">
        <div className="head">
            <h1>Clicky Game!</h1>
            <p> Click on characters to begin, but don't click each one more than once!</p>
        </div>
        <div className= "score">
            <p className="score-text"><strong>Your Score:</strong> {props.score}</p>
            <p className="score-text"><strong>Top Score:</strong>  {props.topscore}</p>
        </div>
    </div>
)

export default header;