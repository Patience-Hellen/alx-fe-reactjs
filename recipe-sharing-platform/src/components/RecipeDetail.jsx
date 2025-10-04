import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function RecipeDetail() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
    fetch("/data.json")
        .then((res) => res.json())
        .then((data) => {
        const found = data.find((item, index) => String(index) === id);
        setRecipe(found);
        })
        .catch((err) => console.error("Error loading recipe:", err));
    }, [id]);

    if (!recipe) {
    return (
        <div className="flex justify-center items-center h-screen text-gray-600">
        Loading recipe...
        </div>
    );
    }

    return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Back button */}
        <Link
        to="/"
        className="inline-block mb-6 text-blue-600 hover:text-blue-800 transition"
        >
        ← Back to Recipes
        </Link>

      {/* Recipe Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-3xl mx-auto">
        {/* Recipe Image */}
        <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-72 object-cover"
        />

        {/* Recipe Info */}
        <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {recipe.name}
            </h1>
            <p className="text-gray-600 mb-6">{recipe.description}</p>

          {/* Ingredients */}
            <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
                🥦 Ingredients
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
                {recipe.ingredients?.map((item, i) => (
                <li key={i}>{item}</li>
                ))}
            </ul>
            </div>

          {/* Instructions */}
            <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
                🍳 Instructions
            </h2>
            <ol className="list-decimal list-inside text-gray-600 space-y-2">
                {recipe.instructions?.map((step, i) => (
                <li key={i}>{step}</li>
                ))}
            </ol>
            </div>
        </div>
        </div>
    </div>
    );
}

export default RecipeDetail;
