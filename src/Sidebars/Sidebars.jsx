import Sidebar from "../Sidebar/Sidebar";

const Sidebars = ({ wantsToCook, currentlyCooking, handlePreparing }) => {
  return (
    <div className="space-y-6 mt-10 w-full md:w-1/2">
      {/* WANT TO COOK */}
      <div className="p-4 bg-gray-100 rounded-lg shadow">
        <h2 className="font-semibold mb-3 text-center">
          Want to cook: {wantsToCook.length}
        </h2>

        {wantsToCook.map((recipe) => (
          <Sidebar
            key={recipe.recipe_id}
            recipe={recipe}
            onPreparing={handlePreparing}
            isPreparing={false}
          />
        ))}
      </div>

      {/* CURRENTLY COOKING */}
      <div className="p-4 bg-gray-100 rounded-lg shadow">
        <h2 className="font-semibold mb-3 text-center">
          Currently Cooking: {currentlyCooking.length}
        </h2>

        {currentlyCooking.map((recipe) => (
          <Sidebar key={recipe.recipe_id} recipe={recipe} isPreparing={true} />
        ))}
      </div>
    </div>
  );
};

export default Sidebars;
