import React from "react";
import "./CategoryItem.css";
import { Link } from "react-router-dom";

export default function CategoryItem({ item }) {
  return (
    <Link to={`/products/${item.category}`}>
      <div className="categoryItemContainer">
        <img className="categoryItemImage" src={item.img} alt="" />
        <div className="categoryItemInfo">
          <h1 className="categoryItemtitle">{item.title}</h1>
          <button className="categoryItemButton">Shop Now</button>
        </div>
      </div>
    </Link>
  );
}
