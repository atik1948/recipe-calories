const Card = ({ recipe, handleAddToCook }) => {
  const {
    recipe_name,
    recipe_image,
    short_description,
    preparing_time,
    calories,
    ingredients,
  } = recipe;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
      <img
        src={recipe_image}
        alt={recipe_name}
        className="h-48 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="text-xl font-semibold">{recipe_name}</h3>
        <p className="text-gray-600 text-sm mt-2 w-full">{short_description}</p>

        <div className="mt-4">
          <h4 className="font-semibold text-gray-700 mb-2">Ingredients:</h4>
          <ul className="list-disc list-inside text-gray-600 text-sm">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between text-sm text-gray-500 mt-4">
          <span>⏱ {preparing_time}</span>
          <span>🔥 {calories}</span>
        </div>
      </div>
      <button
        onClick={() => handleAddToCook(recipe)}
        className="w-full bg-blue-500 text-white py-2 rounded-b-xl hover:bg-blue-600 transition uppercase font-semibold"
      >
        want to cook
      </button>
    </div>
  );
};

export default Card;
