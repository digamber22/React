import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App | chai</h1>
        </div>
    )
}


// const ReactElement = {     // this is not work b/c syntax is not as react aspect;
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)



const anotherUser = "chai aur react"

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank' },  // this must if not the have the empty pass like {}
    'click me to visit google',
    anotherElement   // we write here any evaluated expression , not write if , else statement
)

ReactDOM.createRoot(document.getElementById('root')).render(
   
    //  reactElement 
    <App />

)