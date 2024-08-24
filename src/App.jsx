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
    setArr([...arr])


    inputValue.current.value = ""
  }

  const deleteTodo = (index)=>{
    arr.splice(index ,1)
    setArr([...arr])
  }

  const editTodo =(index)=>{
    const newValue = prompt('Enter New Value')
    arr.splice(index,1,newValue)
    setArr([...arr])
  }

  return (
    <div className="text-center">
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
              <button onClick={ ()=> editTodo(index)}>Edit Todo</button>
            </div>
          })
        }
        </ul>
    </div>
  )
}
export default App;