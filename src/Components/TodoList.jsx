import React  from 'react'
import { useState } from 'react'
const TodoList = () => {
    const[tasks , setTasks] = useState([]);
    const[inputValue , setinputValue] = useState("")
       const handleSubmit =(e) =>{
        e.preventDefault()
    if(inputValue.trim())
        setTasks([...tasks , inputValue])
    setinputValue('')
       }
       const handleChange = (e)=>{
             setinputValue(e.target.value)
       }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={inputValue} placeholder='Add Todo'/>
        <button type='submit'>Add Task</button>
      </form>
    {tasks.map(( todo , index)=>(
  <li key={index}> {todo}</li>
    ))}
    </div>
  )
}

export default TodoList