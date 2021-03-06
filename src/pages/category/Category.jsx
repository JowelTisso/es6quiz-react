import React, { useEffect, useState } from "react";
import "./Category.css";
import { IoChevronBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import { GET } from "../../utils/axiosHelper";
import * as Constants from "../../utils/Constants";
import Card from "./component/Card";
import Spinner from "../../components/spinner/Spinner";

const Category = () => {
  const [categories, setCategories] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { status, data } = await GET(Constants.CATEGORIES_API);
        if (status === 200 || status || 201) {
          setCategories(data.categories);
          setLoading(false);
        }
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    })();
  }, []);

  if (loading) {
    return <Spinner loading={loading} />;
  }

  return (
    <div>
      <h1 className="h2 txt-center mg-top-2x pri-color">CATEGORY</h1>
      <div className="category-container flex-center mg-top-3x">
        {categories.map((category) => (
          <Card key={category._id} {...category} />
        ))}
      </div>
      <div className="category-footer-nav flex-center mg-top-3x">
        <IoChevronBack />
        <Link to={"/"} className="t4 no-deco">
          Back
        </Link>
      </div>
    </div>
  );
};

export default Category;
