import React, { useState } from "react";

const ShoppingList = () => {
  const[carts , setCarts] = useState([])
  const [name , setName] = useState("")
  const [quantity , setQuantity] = useState("")
  const [cart, setCart] = useState([
    { id: 1, name: "Laptop", price: 999.99, quantity: 1 },
    { id: 2, name: "Headphones", price: 49.99, quantity: 2 },
    { id: 3, name: "Mouse", price: 29.99, quantity: 0 },
  ]);
  const[showText , setshowText] = useState(false)
  const handleClick = (id) => {
   setCart((prevCart) => prevCart.map((e)=>(
          e.id === id ? {...e , quantity: e.quantity + 1} : e
      )))
   }
   const removeQuantity=(id)=>{
      setCart((prevCart) => prevCart.map((e)=>(
          e.id === id ? {...e , quantity: e.quantity - 1} : e
      )))
   }
   const handleSumbit =(e)=>{
   e.preventDefault()
   }
  return (
  <div>
    {showText && <p>Hey</p>}
    <button onClick={()=>{setshowText(true)}}>showText</button>
    <button onClick={()=>{setshowText(false)}}>hideText</button>
    {cart.map(({id , name , price , quantity})=>(
       <div key={id}>
        <span>{name} : {price}</span>
        <p> {quantity}</p>
     <button onClick={()=>handleClick(id)}> +</button>
    <button onClick={()=> removeQuantity(id)}>-</button>
       </div>
    ))}
  <form onSubmit={handleSumbit}>
    <input type="text" placeholder="item name" value={name} onChange={(e) => setName(e.target.value)}/>
    <input type="number" placeholder="item number" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
    <button  type="submit">Add Item</button>
  </form>
   <ul>
      {carts.map((item , idx)=>{
        <li key={idx}>{item.name} - Quantity {item.quantity}</li>
      })}
   </ul>

  </div>
)};

export default ShoppingList;
