import React, { useEffect, useState } from "react";
import MealItems from "./MealItem/MealItem";
import Card from "../UI/Card";
import MealItem from "../../types/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState<MealItem[]>([]);
  useEffect(() => {
    const fetchedMeals = async () => {
      const response = await fetch(
        "https://reacttypescript-8e3d3-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );
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
      console.log(loadedMeals);
    };
    fetchedMeals();
  }, []);
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
    <section>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
