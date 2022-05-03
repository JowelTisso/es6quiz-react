import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Rules } from "../pages";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/rules"} element={<Rules />} />
    </Routes>
  );
};

export default AllRoutes;
