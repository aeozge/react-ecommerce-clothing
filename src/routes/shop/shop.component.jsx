import React from "react";

import "./shop.styles.css";

import { Routes, Route } from "react-router-dom";
import Category from '../category/category.component'
import CategoriesPreview from "../categories-preview/categories-preview";


const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
