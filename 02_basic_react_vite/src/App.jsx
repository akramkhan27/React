import Nav from "./Nav"

function App() {

  return (
    // error -> Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>? (7:4)
    // <Nav/>
    // <h1>Hello Akram | from react Vite</h1>

    <>
      <Nav/>
      <h1>Hello Akram | from react Vite</h1>
    </>
  )
}

export default App
