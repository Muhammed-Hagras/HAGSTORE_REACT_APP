import React from 'react'
import "./Cart.scss"

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export default function Cart() {

  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/10148550/pexels-photo-10148550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/11075320/pexels-photo-11075320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Long Sleeve Graphic T-Shirt",
      isNew: true,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur libero facere pariatur vitae, odit magni quod temporibus saepe asperiores, harum quaerat non. Eveniet quo amet animi, dolore iste repellat culpa.",
      oldPrice: 19,
      price: 12
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/794063/pexels-photo-794063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Coat",
      isNew: true,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur libero facere pariatur vitae, odit magni quod temporibus saepe asperiores, harum quaerat non. Eveniet quo amet animi, dolore iste repellat culpa.",
      oldPrice: 19,
      price: 12
    }
  ]
  return (
    <div className='cart'>
      <h1>Products in your Cart</h1>
      {data.map(item=> (
        <div className='item' key={item.id}>
          <img src={item.img} alt=""/>
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0,100)}</p>
            <div className="price">
              1 x ${item.price}
            </div>
          </div>
          <DeleteOutlineOutlinedIcon className='delete'/>
        </div>
      ))}
      <div className="total text-uppercase">
        <span>Subtotal</span>
        <span>$123</span>
      </div>
      <button>Proceed To checkout</button>
      <span className='reset'>Reset Cart</span>
      
    </div>
  )
}
