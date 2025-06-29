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
    // if (counter < 50) {              // imp interview q , is update +4 , ans not b/c useStage send value in batches
    //   chaiCounter(counter + 1)
    //   chaiCounter(counter + 1)
    //   chaiCounter(counter + 1)
    //   chaiCounter(counter + 1)

    // }

       if (counter < 50) {              // imp interview q , but here update in +4 b/c it gives last updated cnt 
      chaiCounter(prevCount => prevCount + 1)   
      chaiCounter(prevCount => prevCount + 1)
      chaiCounter(prevCount => prevCount + 1)
      chaiCounter(nextCnt => nextCnt + 1)        // may some other variable name also , But for readibility take same ;

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
