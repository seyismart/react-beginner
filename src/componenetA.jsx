import React from "react";
import { useState } from "react";
import './Counter.css'

function Component () {
//  let name = "Emmanuel";
 const [counter, setCounter] = useState(0);// usetate hook to change the counter value or state
console.log(counter);


const Increment = () => {
   setCounter(counter + 1);
    console.log(counter);
    // counter = counter + 1;
    // console.log(counter);
   
};
const Decreament= () => {
    setCounter(counter - 1);
    console.log(counter);
    // counter = counter - 1;
    // console.log(counter);
};

return(
    <div className="counter-container">
    <h3 className="header">Counter project {counter}</h3>
    <button className="increment-button" onClick={Increment}>Increment</button>
    <button className="decrement-button" onClick={Decreament}>Decreamant</button>
    </div>
)
}
export default Component