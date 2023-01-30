import React, { useState } from "react";
import "./product.scss";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

export default function Product() {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const images = [
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6801642/pexels-photo-6801642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">$199</span>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad soluta
          modi quaerat, officia alias dolor itaque! Explicabo illo adipisci
          temporibus necessitatibus officiis nemo cum asperiores sit.
          Repudiandae beatae nemo veniam.
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add text-uppercase">
          <AddShoppingCartIcon /> Add To Cart
        </button>
        <div className="links">
          <div className="item text-uppercase">
            <FavoriteBorderIcon /> Add To Wish List
          </div>
          <div className="item text-uppercase">
            <BalanceIcon /> Add To Comapre
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr/>
        <div className="info text-uppercase">
          <span>Description</span>
          <hr/>
          <span>Additional Information</span>
          <hr/>
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
}
