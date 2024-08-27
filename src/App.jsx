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
    if(newValue === null ||newValue.trim() === ''){
      alert('No change')
      return;
    }
    arr.splice(index,1,newValue)
    setArr([...arr])
  }

  return (
    <div className="text-center mt-3">
      <h1>Todo App</h1>
      <form className="text-center p-5  d-flex justify-content-center flex-wrap" onSubmit={formValue}>
        <input required className="px-4 mb-2 py-2 form-control border-success rounded" type="text" placeholder="Enter Todo" ref={inputValue} />
        <button className="btn btn-primary form-control px- mb-2 py-2 border " type="submit">Click</button>
      </form>
      <div>
        {
          arr.length > 0 ?
          arr.map((item,index)=>{
            return <div className="m-2 p-2 bg-light flex-wrap d-flex justify-content-around align-items-center" key={index}>
              <h4 className="px-2">{item}</h4>
          <div className="d-flex">
              <button className="btn btn-danger form-control px-3 border " onClick={()=> deleteTodo(index)}><i className="fa-solid fa-delete-left"></i></button>
              <button className="btn btn-success form-control px-3 border " onClick={()=> editTodo(index)}><i className="fa-regular fa-pen-to-square"></i></button>
          </div>
        </div>
          }) : <h4>No Items Founds</h4>
        }
      </div>
    </div>
  )
}
export default App;