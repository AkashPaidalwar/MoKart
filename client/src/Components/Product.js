import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

export default function Product({ item }) {
  return (
    <div className="productContainer">
      <div className="productCircle"></div>
      <img className="productImage" src={item.img} alt="" />
      <div className="productInfo">
        <div className="iconContainer">
          <ShoppingBagOutlined />
        </div>
        <Link to={`/product/${item._id}`}>
          <div className="iconContainer">
            <SearchOutlined />
          </div>
        </Link>
        <div className="iconContainer">
          <FavoriteBorderOutlined />
        </div>
      </div>
    </div>
  );
}
