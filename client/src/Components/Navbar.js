import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../images/Logo.PNG";

import "./Navbar.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { userContext } from "../Context/Context";

export default function Navbar() {
  const { user, setUser } = React.useContext(userContext);
  const [productSearch, setProductSearch] = React.useState("");
  const handleClick = () => {
    console.log(productSearch);
  };
  return (
    <div className="container">
      <div className="wrapper">
        <div className="left">
          <span>EN</span>
          <div className="searchContainer">
            <input
              placeholder="Search"
              onChange={(event) => setProductSearch(event.target.value)}
            />
            <SearchIcon className="searchIcon" onClick={handleClick} />
          </div>
        </div>
        <div className="center">
          <img className="logo" src={Logo} alt="Logo" />
          <Link to={"/"} className="link">
            <h1 className="navTitle">MoKart</h1>
          </Link>
        </div>
        <div className="right">
          <span className="menuItem">
            <Link to={"/register"} className="link">
              REGISTER{" "}
            </Link>
          </span>

          <span className="menuItem">
            {!user && (
              <Link to={"/login"} className="link">
                SIGN IN
              </Link>
            )}
            {user && (
              <Link to={"/"} className="link" onClick={() => setUser(null)}>
                SIGN OUT
              </Link>
            )}
          </span>
          <div className="menuItem">
            <Badge badgeContent={0} color="secondary">
              <Link to={"/cart"} className="link">
                <ShoppingCartOutlinedIcon />
              </Link>
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
