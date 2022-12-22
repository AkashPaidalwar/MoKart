import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import "./ProductList.css";
import Products from "../Components/Products";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import { useLocation } from "react-router-dom";

export default function ProductList() {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (event) => {
    const value = event.target.value;
    setFilters({
      ...filters,
      [event.target.name]: value,
    });
  };
  console.log(filters);
  return (
    <div>
      <Announcement />
      <Navbar />
      <h1 className="ProductListTitle">{cat}</h1>
      <div className="ProductListFilterContainer">
        <div className="ProductListFilterOneContainer">
          <span
            style={{ fontSize: "20px", fontWeight: "600", marginRight: "20px" }}
          >
            Filter Products:
          </span>
          <select
            className="ProductListSelect"
            name="color"
            onChange={handleFilters}
            defaultValue={"DEFAULT"}
          >
            <option disabled value="DEFAULT">
              Color
            </option>
            <option>white</option>
            <option>black</option>
            <option>red</option>
            <option>yellow</option>
            <option>green</option>
            <option>blue</option>
          </select>
          <select
            className="ProductListSelect"
            name="size"
            onChange={handleFilters}
            defaultValue={"DEFAULT"}
          >
            <option disabled value="DEFAULT">
              Size
            </option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            <option>XXL</option>
          </select>
        </div>
        <div className="ProductListFilterTwoContainer">
          <span
            style={{ fontSize: "20px", fontWeight: "600", marginRight: "20px" }}
          >
            Sort Products:
          </span>
          <select
            className="ProductListSelect"
            onChange={(event) => setSort(event.target.value)}
          >
            <option value="newest">Newest</option>
            <option value="HighToLow">Price High to Low</option>
            <option value="LowToHigh">Price Low to High</option>
          </select>
        </div>
      </div>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </div>
  );
}
