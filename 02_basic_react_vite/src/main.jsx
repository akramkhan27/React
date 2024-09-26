import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

// we can also crete function here 
function Chai(){
    return(
        <h3>Hello Chai!</h3>
    )
}

// const MyElement={
//     type: 'a',
//     props:{
//         href: 'https://www.google.com',
//         target: '_blank'
//     },
//     value: 'Click me to google!!'
// }

// const anotherElement=(<a href='https://www.instagram.com'>Hello Instagram</a>)

// let's create using correct syntax with react
const username="Marka Khan";
const MyElement=React.createElement(
    'a',
    {
        href: "https://www.google.com",
        target: "_blank"
    },
    "Press Me!",
    username
)

createRoot(document.getElementById('root')).render(
    // <App />
    // <Chai/>
    // Chai()
    // <MyElement/>
    // MyElement
    // anotherElement // it is executed only by this because it is variable
    // MyElement
    // <App/>
    MyElement
    
)
