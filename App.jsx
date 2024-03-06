import { useState } from 'react'
import './App.css'

function  App (){
  const [name, setName] = useState('sergi')
  const [age, setAge] = useState(18)
  console.log(name, age)
  const updateName = () =>{
    setName('gio')
  }
  const updateAge = () =>{
    setAge(20)
  }
  const updateBoth = () =>{
    setName('gio')
    setAge(20)
  }
    return (
      <div>
        <button onClick={updateName} >name</button>
        <button onClick={updateAge} >age</button>
        <button onClick={updateBoth } >update both</button>
      </div>
    )
    }
  
export default App