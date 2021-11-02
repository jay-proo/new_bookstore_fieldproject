import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import Product from "./Product.js";
import MetaData from "../layout/MetaData";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";

const product = {
  name: "Artificial Intelligence Basics: A Non-Technical Introduction",
  images: [
    {
      url: "https://images-na.ssl-images-amazon.com/images/I/41HoaybH+tL._SX327_BO1,204,203,200_.jpg",
    },
  ],
  price: "515880",
  _id: "6168669b56af38fcca86f9e6",
};

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, products, productsCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <Fragment>
      <MetaData title="Gatito y Libros" />

      <div className="banner">
        <p>Welcome to Gatito y Libros Bookstore</p>
        <h1>A Big Online Treasure of Books for you...</h1>

        <a href="#container">
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>

      <h2 className="homeHeading">Feature Books</h2>

      <div className="container" id="container">
        {products && products.map((product) => <Product product={product} />)}
      </div>
    </Fragment>
  );
};

export default Home;
