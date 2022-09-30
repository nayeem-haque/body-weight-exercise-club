import React from "react";
import "./Question.css";

const Question = () => {
  return (
    <div className="question-container">
      <div className="answer">
        <h3>
          Q1. How does react work? <br></br>
          <p>
            Ans. React uses a declarative paradigm that makes it easier to
            reason about your application and aims to be both efficient and
            flexible. It designs simple views for each state in your
            application, and React will efficiently update and render just the
            right component when your data changes
          </p>
        </h3>
        <br />
        
        <br />
      </div>
    </div>
  );
};

export default Question;
