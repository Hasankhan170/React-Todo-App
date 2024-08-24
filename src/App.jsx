import { useState, useRef } from "react";

function App(){
  const [arr,setArr] = useState([])

  const inputValue = useRef()
  const formValue = (e)=>{
    e.preventDefault()

    arr.push(inputValue.current.value)
    console.log(arr);
    setArr([...arr])

    inputValue.current.value = ""
    
  }
  
  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={formValue}>
        <input type="text" placeholder="Enter Todo" ref={inputValue} />
        <button type="submit" className="">Click</button>
      </form>
    </div>
  )
}
export default App;