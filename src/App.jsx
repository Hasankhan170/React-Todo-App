import { useState, useRef } from "react";

function App(){
  const [arr,setArr] = useState([])

  const inputValue = useRef()
  const formValue = (e)=>{
    e.preventDefault()
    
    if(inputValue.current.value.trim() === ''){
      alert('please enter somthing')
      return;
    }

    arr.push(inputValue.current.value)
    console.log(arr);
    setArr([...arr])


    inputValue.current.value = ""
    
  }

  const deleteTodo = (index)=>{
    arr.splice(index ,1)
    setArr([...arr])
    console.log(arr);
    
  }

  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={formValue}>
        <input type="text" placeholder="Enter Todo" ref={inputValue} />
        <button type="submit" className="">Click</button>
      </form>
      <ul>
        {
          arr.map((item,index)=>{
            return <div key={index}>
              <li>{item}</li>
              <button onClick={ ()=> deleteTodo(index)}>Delete Todo</button>
            </div>
          })

        }
        </ul>
    </div>
  )
}
export default App;