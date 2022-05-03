import React from "react";
import { Routes, Route } from "react-router-dom";
import { Category, Home, Rules } from "../pages";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/rules"} element={<Rules />} />
      <Route path={"/category"} element={<Category />} />
    </Routes>
  );
};

export default AllRoutes;
