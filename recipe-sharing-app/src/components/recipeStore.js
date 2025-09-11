import create from 'zustand';

const useRecipeStore = create((set) => ({
    recipes: [],

  // Add a recipe
    addRecipe: (newRecipe) =>
    set((state) => ({
        recipes: [...state.recipes, newRecipe],
    })),

  // Delete a recipe by id
    deleteRecipe: (id) =>
    set((state) => ({
        recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  // Update a recipe by id
    updateRecipe: (id, updatedData) =>
    set((state) => ({
        recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedData } : recipe
        ),
    })),

  // Replace all recipes at once
    setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;
