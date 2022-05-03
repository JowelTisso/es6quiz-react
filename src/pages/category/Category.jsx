import React, { useEffect, useState } from "react";
import "./Category.css";
import { IoChevronBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import { GET } from "../../utils/axiosHelper";
import * as Constant from "../../utils/Constants";
import Card from "./component/Card";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { status, data } = await GET(Constant.CATEGORIES_API);
        if (status === 200 || status || 201) {
          setCategories(data.categories);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div>
      <h1 className="h2 txt-center mg-top-2x pri-color">CATEGORY</h1>
      <div className="category-container flex-center mg-top-3x">
        {categories.map((category) => (
          <Card
            key={category._id}
            categoryName={category.categoryName}
            description={category.description}
          />
        ))}
        <div className="footer-nav flex-center mg-top-2x">
          <IoChevronBack />
          <Link to={"/"} className="t4 no-deco">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
