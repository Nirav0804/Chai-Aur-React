import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(5);

  const increaseValue = () => {
    if (counter === 20) return;
    setCounter(counter + 1);
  }

  const decreaseValue = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>counter value:{counter}</h2>
      <button onClick={increaseValue}>Increase Value</button>
      <br />
      <button onClick={decreaseValue}>Decrease Value</button>
    </>
  )
}

export default App
