import React, { Fragment } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";

const Home = () => {
  return (
    <Fragment>
      <div className="banner">
        <p>Welcome to Gatito y Libros Bookstore</p>
        <h1>A Big Online Treasure of Books for you...</h1>

        <a href="#container">
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>
    </Fragment>
  );
};

export default Home;
