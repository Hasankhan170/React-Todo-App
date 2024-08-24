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
    <div className="text-center mt-3">
      <h1>Todo App</h1>
      <form className="text-center p-5  d-flex justify-content-center flex-wrap" onSubmit={formValue}>
        <input className="px-4 mb-2 py-2 form-control border-success" type="text" placeholder="Enter Todo" ref={inputValue} />
        <button className="btn btn-primary px-4 mb-2 py-2 border mx-2 border-0" type="submit">Click</button>
      </form>
      <div>
        {
          arr.map((item,index)=>{
            return <div key={index}>
              <h6>{item}</h6>
              <button onClick={()=> deleteTodo(index)}>Delete Todo</button>
              <button onClick={()=> editTodo(index)}>Edit Todo</button>
            </div>
          })
        }
        </div>
    </div>
  )
}
export default App;