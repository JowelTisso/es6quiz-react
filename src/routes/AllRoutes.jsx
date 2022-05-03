import React from "react";
import { Routes, Route } from "react-router-dom";
import { Category, Home, Quiz, Result, Rules } from "../pages";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/rules"} element={<Rules />} />
      <Route path={"/category"} element={<Category />} />
      <Route path={"/quiz"} element={<Quiz />} />
      <Route path={"/result"} element={<Result />} />
    </Routes>
  );
};

export default AllRoutes;
