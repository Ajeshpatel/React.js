import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter]= useState(5)

  const addValue = ()=>{
    if(counter < 20){
      setCounter(counter+1)
      console.log("Clicked", counter)
    }
    
  }

  const removeValue = ()=>{
    if(counter > 0 ){
      setCounter(counter-1)
      console.log("clicked", counter)
    }
  }

  return (
    <>
      <h1>State in React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick = {addValue}>Add value </button>
      <br></br>
      <button onClick = {removeValue}>Remove value</button>
    </>
  )
}

export default App
