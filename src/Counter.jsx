import React, { useState } from 'react';

const Counter = () => {

    const [count, setCount]= useState(0);
    const handleAdd=()=>{
        const newCount = count + 1;
        setCount(newCount)
    }
    const handleReduce=()=>{
        const newCount = count - 1;
        setCount(newCount)
    }

    return (
        <div style={{border: "2px solid green"}}>
            <h2>Counter :{count}</h2> 
            <button onClick={handleAdd}>Add Counter</button>
            <button onClick={handleReduce}>Reduce Counter</button>
        </div>
    );
};

export default Counter;