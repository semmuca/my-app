import React, { useState } from "react";
import "./Counter.css";

function Counter() {

  const [counterValue, setCounterVallue] = useState(0)  
  const [inputValue, setInputValue] = useState(1)

  const addToCounter = () => {
      setCounterVallue(counterValue + inputValue)
  }

  const subtractFromCounter = () => {
      setCounterVallue(counterValue - inputValue)
  }

    return (
        <div>
            <h2 data-testid="header">My Counter</h2>
            <h1
             data-testid="counter"
             className={`${counterValue >= 100 ? "green" : ""} ${counterValue <= -100 ? "red" : ""}`}

            >
           
                {counterValue}
            </h1>
            <button data-testid="subtract-btn"
            onClick={subtractFromCounter}
            >-</button>
            <input 
            data-testid="input" 
            type="number" 
            value={inputValue} 
            className="text-center"
            onChange = {(e:any)=>{
                setInputValue(parseInt(e.target.value))

            }}
            />
            <button 
            data-testid="add-btn"
            onClick={addToCounter}
            
            >+</button>
            
        </div>
    );
}

export default Counter;