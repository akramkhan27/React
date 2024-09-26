import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [num, setNum]=useState(15);

  // let num=15;
  const addValue=()=>{
    // num++;
    // console.log("Clicked" , num);
    if(num<20){
      setNum(num+1);
    }
  }

  const removeValue=()=>{
    if(num>0){
      setNum(num-1)
    }
  }

  return (
    <>
      <h1>Marka Khan {num}</h1>
      <h2>Counter {num}</h2>
      <button onClick={addValue}>Add Number {num}</button>
      <br/>
      <br/>
      <button onClick={removeValue}>Remove Number {num}</button>
      <p>Footer {num}</p>
    </>
  )
}

export default App
