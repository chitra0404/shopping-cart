import React from 'react'
import './product.css'

 function Product(props){
  return (
   <div className='productss' >
    
    <div className='cards'>
 <img src={props.product.image} alt={props.product.title}></img>
 <h4 className="brand" >{props.product.title}</h4>
    <strong className="rating">{props.product.rating}</strong>
    <h3 className='price'>{props.product.price}</h3>
    {props.isInCart ? ( <button  className='added' onClick={()=>(props.onRemoveCart(props.product))} >Remove Cart </button>):(<button  className='added' onClick={()=>props.OnAddCart(props.product)} >Add to Cart </button>)}
   </div>
  </div>
  )
}

export default Product