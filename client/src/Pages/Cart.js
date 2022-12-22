import React from "react";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "./Cart.css";
import { userContext } from "../Context/Context";

export default function Cart() {
  const { cart } = React.useContext(userContext);
  let subtotal = 0;

  return (
    <div className="cartContainer">
      <Announcement />
      <Navbar />
      <div className="cartWrapper">
        <h1 className="cartTitle">YOUR BAG</h1>
        <div className="cartTop">
          <button className="cartTopShoppingButton">CONTINUE SHOPPING</button>

          <button className="cartTopCheckoutButton">CHECKOUT NOW</button>
        </div>
        <div className="cartBottom">
          <div className="cartBottomInfo">
            {cart.products.map((item) => {
              subtotal += item.price * item.quantity;
              return (
                <div className="cartProduct">
                  <div className="cartProductDetail">
                    <img src={item.image} alt="" className="cartProductImage" />
                    <div className="cartProductDetailText">
                      <span className="cartProductName">
                        <b>Product:</b>
                        {item.productName}
                      </span>
                      <span
                        className="cartProductColor"
                        style={{ backgroundColor: `${item.color}` }}
                      ></span>

                      <span className="cartProductSize">
                        <b>Size:</b>
                        {item.size}
                      </span>
                    </div>
                  </div>
                  <div className="cartProductPriceDetail">
                    <div className="cartProductAmountContainer">
                      <h3>Quantity: </h3>
                      <span className="cartProductAmount">{item.quantity}</span>
                    </div>
                    <div className="cartProductPrice">
                      Price Per Item Rs: {item.price}
                    </div>
                    <div className="cartProductPrice">
                      Total Price: {item.price * item.quantity}
                    </div>
                  </div>
                </div>
              );
            })}

            <hr />
          </div>
          <div className="cartBottomSummery">
            <h1 className="cartSummeryTitle">ORDER SUMMERY</h1>
            <div className="cartSummeryItem">
              <span className="cartSummeryListItem">Subtotal: </span>
              <span className="cartSummeryPrice">Rs: {subtotal}</span>
            </div>
            <div className="cartSummeryItem">
              <span className="cartSummeryListItem">Estimated Shipping: </span>
              <span className="cartSummeryPrice">Rs 200</span>
            </div>
            <div className="cartSummeryItem">
              <span className="cartSummeryListItem">Shipping Discount: </span>
              <span className="cartSummeryPrice">Rs -200</span>
            </div>
            <div className="cartSummeryItem cartSummeryTotal">
              <span className="cartSummeryListItemTotal">Total</span>
              <span className="cartSummeryPriceTotal">Rs {subtotal}</span>
            </div>
            <button className="cartCheckOutButton">CHECKOUT NOW</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
