import React from 'react'
import Card from '../Card/Card'
import "./List.scss"

export default function List() {
    const  data = [
        {
          id: 1,
          img: "https://images.pexels.com/photos/10148550/pexels-photo-10148550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          img2: "https://images.pexels.com/photos/11075320/pexels-photo-11075320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          title: "Long Sleeve Graphic T-Shirt",
          isNew: true,
          oldPrice: 19,
          price: 12
        },
        {
          id: 2,
          img: "https://images.pexels.com/photos/794063/pexels-photo-794063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          title: "Coat",
          isNew: true,
          oldPrice: 19,
          price: 12
        },
        {
          id: 3,
          img: "https://images.pexels.com/photos/2388237/pexels-photo-2388237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          title: "Skirt",
          oldPrice: 19,
          price: 12
        },
        {
          id: 4,
          img: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          title: "Hat",
          oldPrice: 19,
          price: 12
        },
        
      ]
  return (
    <div className='list'>
        {data.map(item => <Card item={item} key={item.id}/>)}
    </div>
  )
}
