import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)

  const addValue=()=>{
    // React updates state asynchronously, which means that if you rely directly on the state variable (like counter)
    // you might not get the latest value if there are multiple updates in quick succession.
    //  Using prevCounter ensures you're always working with the most up-to-date value.
    setCounter((prevCounter)=>prevCounter+1);  // -- prevCounter name can be anything because it comes or return  from setcounter
    setCounter((prevCounter)=>prevCounter+1);
    setCounter((prevCounter)=>prevCounter+1);
    setCounter((prevCounter)=>prevCounter+1);
  }
  const removeValue=()=>{
    setCounter(counter-1);
  }
  return (
    <>
      <h1>Counter {counter}</h1>
      <button onClick={addValue}>Add Value {counter}</button>
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
