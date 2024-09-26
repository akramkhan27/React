import Nav from "./Nav"

function App() {
  const username="Akram Khan"
  return (
    // error -> Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>? (7:4)
    // <Nav/>
    // <h1>Hello Akram | from react Vite</h1>

    <>
      <Nav/>
      <h1>Hello Akram | from react Vite {username}</h1>
      {/* <h1>Hello Akram | from react Vite {if(true) conole.log(Akram)}</h1> */}
    </> 
  )
}

export default App
