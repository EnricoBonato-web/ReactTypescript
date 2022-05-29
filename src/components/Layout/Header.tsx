import React from "react";
import { Fragment } from "react";
import background from "../../assets/meals.jpg";
import classes from "./header.module.css";
const Header = (props: any) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={background} alt="ciboooo"></img>
      </div>
    </Fragment>
  );
};
export default Header;
