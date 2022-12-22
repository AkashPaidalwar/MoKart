import React from "react";
import "./Login.css";
import { userContext } from "../Context/Context";

export default function Login() {
  const userRef = React.useRef();
  const passwordRef = React.useRef();
  const { setUser, setCart } = React.useContext(userContext);
  const [loginSuccess, setLoginSuccess] = React.useState(true);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const credentials = {
        username: userRef.current.value,
        password: passwordRef.current.value,
      };
      console.log(
        "credentials " + credentials.username + " " + credentials.password
      );
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const userFound = await res.json();
      userFound._id && setUser(userFound);
      if (!userFound._id) {
        setLoginSuccess(false);
      }
      if (userFound._id) {
        ///find/:userId
        const existingCart = await fetch(`/api/carts/find/${userFound._id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            token: "BERAER " + userFound.accessToken,
            userId: userFound._id,
          },
        });
        const existingCartFound = await existingCart.json();
        setCart(existingCartFound);

        if (!existingCartFound) {
          const resCart = await fetch("/api/carts/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              token: "BERAER " + userFound.accessToken,
            },
            body: JSON.stringify({
              userId: userFound._id,
              products: [],
            }),
            Cache: "default",
          });
          const cartdata = await resCart.json();
          setCart(cartdata);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="loginWrapper">
      <div className="loginContainer">
        <h1 className="loginTitle">SIGN IN</h1>
        <form className="loginForm" onSubmit={handleLogin}>
          <input
            className="loginFormInput"
            placeholder="Username"
            ref={userRef}
          />
          <input
            className="loginFormInput"
            placeholder="Password"
            ref={passwordRef}
          />
          <button className="loginLoginButton" type="submit">
            LOGIN
          </button>

          <a className="loginAnchor" href="/register">
            CREATE A NEW ACCOUNT
          </a>
        </form>
        {!loginSuccess && (
          <span style={{ margin: "25px", color: "red", fontSize: "25px" }}>
            Incorrect Username or Password
          </span>
        )}
      </div>
    </div>
  );
}
