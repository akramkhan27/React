import { useEffect } from 'react'
import { useRef } from 'react'
import { useCallback } from 'react'
import { useState } from 'react'

function App() {
  const [length, setLength]= useState(8) // useState() used to change the variable in the UI
  const [numberAllowed, setNumberAllowed]= useState(false)
  const [characterAllowed, setCharacterAllowed]= useState(false)
  const [password, setPassword]= useState("");

  const passwordRef=useRef(null)
  const genereatePassword=useCallback(()=>{
    let pass="";
    let string="ABCDEFGHIJKLMNOPQRSTUVWXYZabcedfghijklmnopqrstuvwxyz"
    if(numberAllowed) string+="0123456789";
    if(characterAllowed) string+="!@#$%^&*()";
    for(let i=0; i<length;i++){
      let char=Math.floor(Math.random()*string.length+1)
      pass+=string.charAt(char);
    }
    setPassword(pass);
  },[length, numberAllowed, characterAllowed, setPassword])

  const copyToClipBoard=useCallback(()=>{ // useCallback() used for memonozation and cache, it reuse something(variable and function) from cache if necessary to enhance the performance
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,10);
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(genereatePassword,[length, numberAllowed, characterAllowed]) // useEffect() hook run first whenever the page reload or dependencies changes

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8
     bg-gray-800 text-orange-500">
      <h1 className=" text-4xl  text-white  text-center">
        Password Generator
      </h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef} // ref variable or attribute available in every element to paass reference
        />
        <button
        onClick={copyToClipBoard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >Copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>

        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }}
          />
          <label>Length : {length}</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor='numberInput'> Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={characterAllowed}
            id="characterInput"
            onChange={() => {
              setCharacterAllowed((prev) => !prev)
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>

    </div>
  )
}

export default App
