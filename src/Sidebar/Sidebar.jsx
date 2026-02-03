const Sidebar = ({ recipe, onPreparing, isPreparing }) => {
  const { recipe_name, preparing_time, calories } = recipe;

  return (
    <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow mb-2">
      <p className="text-sm font-medium w-1/3">{recipe_name}</p>
      <p className="text-sm text-gray-600">⏱ {preparing_time}</p>
      <p className="text-sm text-gray-600">🔥 {calories} kcal</p>

      {!isPreparing && (
        <button
          onClick={() => onPreparing(recipe)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
        >
          Preparing
        </button>
      )}
    </div>
  );
};

export default Sidebar;
