import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="max-w-7xl mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h2 className="text-xl font-bold w-1/4">Recipe Calories</h2>

        {/* Desktop Menu (CENTER) */}
        <ul className="hidden md:flex gap-6 justify-center w-2/4">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">Recipes</li>
          <li className="hover:underline cursor-pointer">About</li>
          <li className="hover:underline cursor-pointer">Search</li>
        </ul>

        {/* Desktop Search (RIGHT) */}
        <div className="hidden md:flex justify-end w-1/4">
          <input
            type="text"
            className="p-2 rounded-full border text-sm"
            placeholder="Search recipes..."
          />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 bg-white shadow rounded-lg p-4 space-y-3">
          <p className="cursor-pointer hover:text-orange-500">Home</p>
          <p className="cursor-pointer hover:text-orange-500">Recipes</p>
          <p className="cursor-pointer hover:text-orange-500">About</p>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            placeholder="Search recipes..."
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
