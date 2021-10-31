import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";

const options = {
  /* burgerColor:"#000000", */
  burgerColorHover: "#24B956",
  logo /* : { logo } */,
  logoWidth: "20vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  /* logoHoverColor:"eb4034", */
  link1Text: "Home",
  link2Text: "Books",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/product",
  link3Url: "/contact",
  link4Url: "about",
  link1Size: "1.8vmax",
  link1Color: "rgba(35,35,35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  link1ColorHover: "#24B969",
  link2ColorHover: "#24B969",
  link3ColorHover: "#24B969",
  link4ColorHover: "#24B969",
  link2Margin: "1vmax",
  link3Margin: "0",
  link4Margin: "1vmax",
  profileIconColor: "rgba(35,35,35,0.8)",
  searchIconColor: "rgba(35,35,35,0.8)",
  cartIconColor: "rgba(35,35,35,0.8)",
  profileIconColorHover: "#24B969",
  searchIconColorHover: "#24B969",
  cartIconColorHover: "#24B969",
  cartIconMargin: "1vmax",
};
const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;
