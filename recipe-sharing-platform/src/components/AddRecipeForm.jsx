import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!title.trim()) newErrors.title = "Recipe title is required.";
    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required.";
    } else {
      const ingredientsList = ingredients
        .split(",")
        .map((i) => i.trim())
        .filter(Boolean);
      if (ingredientsList.length < 2) {
        newErrors.ingredients =
          "Please provide at least two ingredients (comma-separated).";
      }
    }
    if (!steps.trim()) newErrors.steps = "Preparation steps are required.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    console.log("Recipe submitted:", { title, ingredients, steps });
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg md:max-w-2xl"
      >
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          ➕ Add Recipe
        </h1>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
          {/* Title */}
          <div className="mb-4 md:mb-0">
            <label className="block text-gray-700 mb-2">Recipe Title</label>
            <input
              type="text"
              className={`w-full border ${
                errors.title ? "border-red-500" : "border-gray-300"
              } rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          {/* Ingredients */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Ingredients</label>
            <textarea
              className={`w-full border ${
                errors.ingredients ? "border-red-500" : "border-gray-300"
              } rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              rows="3"
              placeholder="Separate with commas"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            ></textarea>
            {errors.ingredients && (
              <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
            )}
          </div>
        </div>

        {/* Steps */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Preparation Steps</label>
          <textarea
            className={`w-full border ${
              errors.steps ? "border-red-500" : "border-gray-300"
            } rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            rows="4"
            placeholder="Write each step. Use periods to separate steps."
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          ></textarea>
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>

        {/* Button full-width on mobile, half-width on desktop */}
        <button
          type="submit"
          className="w-full md:w-1/2 mx-auto block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
