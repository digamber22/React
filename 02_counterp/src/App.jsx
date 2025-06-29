import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //  const [counter, setCounter] = useState(15)
  const [counter, chaiCounter] = useState(15)    // may writer let instead of const and useStage give two val as arr[counter, function]
  // useState(any_value like,boolean, fn,empty arr,object,)

  // let counter = 15 ;
  const addValue = () => {
    if (counter < 20) {
      chaiCounter(counter + 1)
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      chaiCounter(counter - 1)
    }
    console.log('clicked', counter);
  }

  return (
    <>
      <h1> Chai aur React </h1>
      <h2>Current value is {counter}</h2>
      <button
        onClick={addValue}>Add value {counter}</button><br></br>
      <button
        onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
