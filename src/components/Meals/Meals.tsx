import MealsSummary from "./MealSummary";
import AvailableMeals from "./AvailableMeals";
import React, { Fragment } from "react";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};
export default Meals;
