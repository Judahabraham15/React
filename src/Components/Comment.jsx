import React from 'react'
 import { useState } from 'react' 
const Comment = () => {
    const[comments , setComments] = useState(0)
    const [error , setError] = useState(false)
  const Handlechange = (e) => { 
      const value = e.target.value;
      setComments(`${value.length} / 100`)
      setError(value.length > 100)
       if(value.length > 100){
        setComments(0)
       }
   }
  return (
    <div>
        <textarea type='text' onChange={Handlechange} placeholder='Enter Text'/>
        <p>Your counter is : {comments}</p>
       {error && <p>Warning, you have exceeded 100 characters</p>}
    </div>
  )
}

export default Comment