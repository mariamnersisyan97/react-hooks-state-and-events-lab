import React, { useState } from "react";

function Item({ name, category }) {
  const [cart, setInCart] = useState(false);
  const inCart = cart ? "in-cart" : '""';
  function handleCart() {
    console.log("clicked");
    setInCart(!cart);
  }

  return (
    <li className={inCart ? "" : "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>
        {cart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
