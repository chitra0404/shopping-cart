import React from 'react'
import './cart.css'


function Cart({cartItems,onRemoveCart,handleChange}) {
  
  return (
    <div className='cart-style'>
        <button >cart<sup>{cartItems.length}</sup></button>
    {cartItems.map((item)=> (
        <div key={item.id}>
          <div>
            <img >{item.img}</img>
            <h4 >{item.title}</h4>
            <h3 >{item.price}</h3>
          
</div>
<div>
            <button onClick={()=>handleChange(item,+1)}>+</button>
            <button >{item.quantity}</button>
           
            <button onClick={()=>handleChange(item,-1)}>-</button>
            </div>
            <button onClick={()=>onRemoveCart(item)}>RemoveCart</button>
         
        </div>
        
    ))}
    </div>
  )
}

export default Cart