import React, { useState } from "react";
import List from "../../components/List/List";
import "./Products.scss"

export default function Products() {
  const [maxPrice, setMaxPrice] = useState(1000)
  const [sort, setSort] = useState(null)

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" name="" id="1" value={1}/>
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" name="" id="2" value={2}/>
            <label htmlFor="2">Skirts</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" name="" id="3" value={3}/>
            <label htmlFor="3">Coats</label>
          </div>
        </div>
        <div className="filterItem">
        <h2>Filter by price</h2>
        <span>0</span>
        <div className="inputItem">
          <input type="range" name="" id="" min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)}/>
        </div>
        <span>{maxPrice}</span>
        </div>
        <div className="filterItem">
        <h2>Sort by</h2>
        <div className="inputIem">
          <input type="radio" name="price" id="asc" value="asc" onChange={(e)=>setSort("asc")}/>
          <label htmlFor="asc">Price (Lowest first)</label>
        </div>
        <div className="inputIem">
        <input type="radio" name="price" id="desc" value="desc" onChange={(e)=>setSort("desc")}/>
          <label htmlFor="desc">Price (Hgighest first)</label>
        </div>
        </div>
      </div>
      <div className="right">
        <img className="catImg" src="https://images.pexels.com/photos/706135/pexels-photo-706135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
      <List sort={sort}/>
      </div>
    </div>
  );
}
