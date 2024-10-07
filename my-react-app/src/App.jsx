import { useState } from 'react'
import './App.css'

function App() {
  const[value, setValue] = useState(0);

  const add= ()=>{
    setValue(value+1);
  }
  const subtract =()=>{
    setValue( value-1);
   
  }


  return (
    <>
      <div>
        <button onClick={add}>click here the increase the value </button>
        <br></br>
        <button>{value}</button>
        <br/>
        <button onClick={subtract}>click here the decrese the value</button>
        
       </div>
    </>
  )
}

export default App
