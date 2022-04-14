import React, { useRef, useState } from 'react'

const Counter = () => {

    const [count,setCount] =useState(0)
    const refx=useRef(0); //creating a useRef variable
  return (
    <div>
        <h1>{count}</h1>
      <button onClick={()=>{

          setCount(count+1);

          (refx.current=refx.current+1) //increment refx

          }}>Increment</button>

      <button onClick={()=>{setCount(count-1)}}>Decrement</button>
{/*  */}
      <h1>{refx.current}</h1> {/* Printing on screen */}
      
    </div>
  )
}

export default Counter
