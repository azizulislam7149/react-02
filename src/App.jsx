import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'

function App() {

  const handleClick= ()=>{
    alert('click the button')
  }

  const handleClick2= (num)=>{
    alert(num + 10)
  }
function handleClick1(){
  alert('my name is Aziz');
}

  return (
    <>
      <Team></Team>
        <Counter></Counter>
      <h1> React Core Concept 2</h1>
    <button onClick={handleClick}>Click </button>
    <button onClick={()=>handleClick2(12)}>Click 01</button>
    <button onClick={()=>{alert('fucntion body clicked')}}>body function</button>
    <button onClick={handleClick1}>four number</button>
    </>
  )
}

export default App
