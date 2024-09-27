import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Card from "./component/Card";

function App() {
  const [count, setCount] = useState(0);
  
  const myObj={
    name: "Akram",
    age: 23
  }
  const myArr=[1,2,3,4]
  return (
    <>
      <h1 className="bg-green-600 bo rounded-xl p-3 text-black font-bold mb-5">
        Hello, Everyone
      </h1>
      {/* <Card year="2024" obj={myObj} arr={myArr}/> */}
      <Card year="2024" btnText="Click me"/>
      {/* <Card year="2025" btnText="Visit me"/> */}
      <Card year="2025" />
    </>
  );
}

export default App;
