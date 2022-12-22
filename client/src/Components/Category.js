import React from "react";
import { categoryData } from "../HomeData";
import CategoryItem from "./CategoryItem";
import "./Category.css";

export default function Category() {
  return (
    <div className="categoryContainer">
      {categoryData.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </div>
  );
}
