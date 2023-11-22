import React, { useState } from 'react'
import Nbar from './navbar'
import Product from './product'
import Cart from './cart';
import './component.css'


function Component() {
 
   
    const [productdetails]=useState([
      {
          id: 1,
          image: "https://staticimg.titan.co.in/Titan/Catalog/90086KM05_1.jpg?impolicy=pqmed&imwidth=640",
          rating: "★★★★",
          title: "Titan NR1802NL02 ",
          price: 3245,
          quantity: 1,
      },
       {
          id: 2,
           image: "https://thewatchstore.com.ph/cdn/shop/files/tommy-men-collection.jpg?v=1694667967",
           rating: "★★★★★",
           title: "Fossil FS5852 Bronson",
           price: 3100,
           quantity: 1,
       },
      {
          id: 3,
          image: "https://www.tissotwatches.com/media/catalog/product/T/1/T116.617.36.052.00_R.png?im=Resize=(1200,1200)",
          rating: "★★★★",
           title: "TISSOT  CARSON",
          price: 8400,
           quantity: 1,
       },
       {
           id: 4,
          image: "https://4.imimg.com/data4/DS/XS/MY-26510561/casio-539-full-black-watch-for-men.jpg",
          rating: "★★★★★",
          title: "Casio GM-2100",
          price: 6357,
        quantity: 1,
       },
       {
           id: 5,
          image: "https://watchesprime.com/wp-content/uploads/2023/07/1710479-tommy-hilfiger-watch-men-gray-dial-metal-stainless-steel-strap-quartz-analog-monthly-weekly-date-henry_5.webp ",
          rating: "★★★★",
          title: "Tommy Hilfiger ",
        price: 14799,
          quantity: 1,
     },
     {
          id: 6,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg4uqTSnwjqI06rDxBjlM6ngN-hrs-vYc4mUFFmPXVrzIUV3hEzLhTPXEQnrLaUz6U2RE&usqp=CAU",
         rating: "★★★★★",
         title: "Guess",
         price: 4500,
           quantity: 1,
       },
       {
           id: 7,
           image: "https://cdn4.ethoswatches.com/the-watch-guide/wp-content/uploads/2019/02/Skagen-SEO-mobile-mast.jpg",
           rating: "★★★★",
           title: "skagen Grenen",
          price: 4990,
           quantity: 1,
       },
       {
          id: 8,
         image: "https://www.citychain.com.sg/cdn/shop/products/SSC917P1_img03_1800x1800.webp?v=1671183980",
          rating: "★★★★",
           title: "seiko Sports",
         price: 4500,
          quantity: 1,
      }
    ]);
    const [cart,setCart]=useState([]);
    const addToCart=(product)=>{
    
  setCart([...cart,product]);
    }
    const removeFromCart=(productToRemove)=>{
        setCart(cart.filter((product)=>product !==productToRemove))
    }
   const handleChange=(product,d)=>{
   let ind=-1;
   cart.forEach((data,index)=>{
    if(data.id==product.id)
    ind=index;
   });
   const tempArr=cart;
   tempArr[ind]+=d;
   if(tempArr[ind].quantity===0)
   tempArr[ind].quantity=1;
  setCart([...tempArr]);
  
   }
   
  return (
    <div className='style'>
   <div>
     <Nbar></Nbar> 
     <Cart cartItems={cart} onRemoveCart={removeFromCart} handleChange={handleChange} />
    </div>
    <div className='pro-style'>
    {productdetails.map(product=>(
      <Product key={product.id} product={product} OnAddCart={addToCart} onRemoveCart={removeFromCart} 
      isInCart={cart.includes(product)} />
      
    ))}
     </div> 
  
   
   </div>
  )
}

export default Component