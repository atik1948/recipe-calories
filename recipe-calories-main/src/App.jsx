import Navbar from "./Navbar/Navbar.jsx";
import Banner from "./Banner/Banner.jsx";
import Recipes from "./Recipes/Recipes.jsx";
import Sidebars from "./Sidebars/Sidebars.jsx";
import { useState } from "react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

function App() {
  const [wantsToCook, setWantsToCook] = useState([]);
  const [currentlyCooking, setCurrentlyCooking] = useState([]);

  const handleAddToCook = (recipe) => {
    const exists = wantsToCook.find(
      (item) => item.recipe_id === recipe.recipe_id,
    );

    if (!exists) {
      setWantsToCook((prev) => [...prev, recipe]);

      toast.success("Product Added!", {
        duration: 2000,
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } else {
      toast.error("Already added!");
    }
  };

  const handlePreparing = (recipe) => {
    setWantsToCook((prev) =>
      prev.filter((item) => item.recipe_id !== recipe.recipe_id),
    );
    setCurrentlyCooking((prev) => [...prev, recipe]);
  };

  return (
    <>
      <Navbar />
      <Banner />
      <div className="md:flex max-w-7xl mx-auto my-14 px-4 gap-8">
        <Recipes handleAddToCook={handleAddToCook} wantsToCook={wantsToCook} />
        <Sidebars
          wantsToCook={wantsToCook}
          currentlyCooking={currentlyCooking}
          handlePreparing={handlePreparing}
        />
        <Toaster position="top-center" />
      </div>
    </>
  );
}

export default App;
