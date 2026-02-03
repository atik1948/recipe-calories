import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Recipes = ({ handleAddToCook }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto w-full md:w-1/2">
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {recipes.map((recipe) => (
            <Card
              key={recipe.recipe_id}
              recipe={recipe}
              handleAddToCook={handleAddToCook}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Recipes;
