
import { useRef  } from "react";

const App = ()=>{


  // const [arr,setArr] = useState([])
  const todoValue = useRef()


  const formValue = (e)=>{
    e.preventDefault();
    console.log(todoValue.current.value);
 
  


    todoValue.current.value = ""
    
    
  }




  return (
    <div>
    <form onSubmit={formValue}>
      <input type="text" placeholder="Enter Todo" ref={todoValue}/>
      <button type="submit">Click</button>
    </form>
    </div>
  )


}

export default App;