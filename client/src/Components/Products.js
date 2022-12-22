import React from "react";
import "./Products.css";
import Product from "./Product";

export default function Products({ cat, filters, sort }) {
  const [products, setProducts] = React.useState([]);
  const [filteredProducts, setfilteredProducts] = React.useState([]);
  React.useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(
          cat ? `/api/products?category=${cat}` : "/api/products"
        );
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [cat]);

  React.useEffect(() => {
    cat &&
      setfilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  React.useEffect(() => {
    if (sort === "newest") {
      setfilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "HighToLow") {
      setfilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setfilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <div className="productsContainer">
      {cat
        ? filteredProducts.map((item) => {
            return <Product item={item} key={item.id} />;
          })
        : products.slice(0, 10).map((item) => {
            return <Product item={item} key={item.id} />;
          })}
    </div>
  );
}
