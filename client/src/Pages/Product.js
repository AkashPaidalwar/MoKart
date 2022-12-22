import { Add, Remove } from "@mui/icons-material";
import React from "react";
import { useLocation } from "react-router-dom";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Newsletter";
import "./Product.css";
import { userContext } from "../Context/Context";

export default function Product() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = React.useState({});
  const [quantity, setQuantity] = React.useState(1);
  const [color, setColor] = React.useState("");
  const [size, setSize] = React.useState("");
  const { user, setCart, cart } = React.useContext(userContext);

  React.useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await fetch("/api/products/find/" + id);
        const data = await res.json();
        console.log(data);
        setProduct(data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = async () => {
    console.log("user._id " + user._id);
    try {
      const resCart = await fetch(`/api/carts/${cart._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          token: "BERAER " + user.accessToken,
        },
        body: JSON.stringify({
          productId: product._id,
          quantity: quantity,
          color: color,
          size: size,
          price: product.price,
          productName: product.title,
          image: product.img,
          userId: user._id,
        }),
        Cache: "default",
      });
      const cartdata = await resCart.json();
      setCart(cartdata);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Announcement />
      <Navbar />
      <div className="ProductWrapper">
        <div className="ProductImageContainer">
          <img src={product.img} alt="" className="ProductImage" />
        </div>
        <div className="ProductInfoContainer">
          <h1 className="ProductInfoTitle">{product.title}</h1>
          <p className="ProductInfoDesc">{product.description}</p>
          <h2 className="ProductInfoPrice">{product.price}</h2>
          <div className="ProductFilterContainer">
            <div className="ColorFilterContainer">
              <h3 className="ColorFilterTitle">Color</h3>
              {product.color &&
                product.color.map((col) => (
                  <div
                    className="colorPallet"
                    style={{ backgroundColor: col }}
                    key={col}
                    onClick={() => setColor(col)}
                  ></div>
                ))}
            </div>
            <div className="SizeFilterContainer">
              <h3 className="SizeFilterTitle">Size</h3>
              <select
                className="FilterSelect"
                onChange={(event) => setSize(event.target.value)}
              >
                <option disabled selected>
                  Size
                </option>
                {product.size &&
                  product.size.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
          </div>
          <div className="ProductAddContainer">
            <div className="ProductQuantityContainer">
              <Remove
                className="changeProductQuantity"
                onClick={() => handleQuantity("dec")}
              />
              <span className="ProductQuantity">{quantity}</span>
              <Add
                className="changeProductQuantity"
                onClick={() => handleQuantity("inc")}
              />
            </div>
            <button className="AddToCartButton" onClick={handleClick}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}
