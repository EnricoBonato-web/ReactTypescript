import React, { useEffect, useState } from "react";
import MealItems from "./MealItem/MealItem";
import Card from "../UI/Card";
import MealItem from "../../types/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState<MealItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchedMeals = async () => {
      setIsLoading(true);
      const response = await fetch(process.env.REACT_APP_FireBase!);
      if (!response.ok) {
        throw new Error("Something went very very wrong");
      }
      const responseData = await response.json();
      const loadedMeals: MealItem[] = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchedMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);
  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }
  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>loading...</p>
      </section>
    );
  }
  const mealList = meals.map((meal) => (
    <MealItems
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      amount={1}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
