import React from "react";
import { Fragment } from "react";
import background from "../../assets/meals.jpg";
import classes from "./header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props: any) => {
  //TODO Any
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={background} alt="ciboooo"></img>
      </div>
    </Fragment>
  );
};
export default Header;
