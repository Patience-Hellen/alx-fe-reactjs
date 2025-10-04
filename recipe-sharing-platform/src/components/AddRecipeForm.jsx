import { useState } from "react";

function AddRecipeForm() {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [steps, setSteps] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!title || !ingredients || !steps) {
        setError("All fields are required.");
        return;
    }

    const ingredientsList = ingredients.split(",").map((item) => item.trim());
    if (ingredientsList.length < 2) {
        setError("Please enter at least two ingredients (comma-separated).");
        return;
    }

    // Reset error
    setError("");

    // New recipe object
    const newRecipe = {
        id: Date.now(),
        name: title,
        ingredients: ingredientsList,
        instructions: steps.split(".").map((s) => s.trim()).filter(Boolean),
    };

    console.log("Recipe submitted:", newRecipe);

    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
    };

    return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
        <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg"
        >
        <h1 className="text-2xl font-bold mb-4 text-gray-800">➕ Add Recipe</h1>

        {error && (
            <p className="text-red-500 mb-4 text-sm font-medium">{error}</p>
        )}

        {/* Recipe Title */}
        <div className="mb-4">
            <label className="block text-gray-700 mb-2">Recipe Title</label>
            <input
            type="text"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
        </div>

        {/* Ingredients */}
        <div className="mb-4">
            <label className="block text-gray-700 mb-2">Ingredients</label>
            <textarea
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
            placeholder="Separate ingredients with commas"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            ></textarea>
        </div>

        {/* Steps */}
        <div className="mb-4">
            <label className="block text-gray-700 mb-2">Preparation Steps</label>
            <textarea
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Write each step. Use periods to separate steps."
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            ></textarea>
        </div>

        {/* Submit Button */}
        <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition"
        >
            Submit Recipe
        </button>
        </form>
    </div>
    );
}

export default AddRecipeForm;
