import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
    const [recipes, setRecipes] = useState([]);

  // Load data.json when component mounts
    useEffect(() => {
    fetch("/data.json")
        .then((response) => response.json())
        .then((data) => setRecipes(data))
        .catch((error) => console.error("Error loading recipes:", error));
    }, []);

    return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Page Title */}
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        🍲 Recipe Collection
        </h1>

      {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe, index) => (
            <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
            {/* Recipe Image */}
            <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-48 object-cover"
            />

            <Link to={`/recipe/${index}`}>
    <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition">
    View Details
    </button>
</Link>

            {/* Recipe Content */}
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                {recipe.name}
                </h2>
                <p className="text-gray-600 text-sm mt-2">{recipe.description}</p>
                <p className="text-sm text-gray-500 mt-2">⏱ {recipe.time} mins</p>

              {/* Action Button */}
                <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition-colors duration-300">
                View Details
                </button>
            </div>
            </div>
        ))}
        </div>
    </div>
    );
}

export default HomePage;
