// src/components/RecipeList.jsx
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
    const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
    const addFavorite = useRecipeStore((state) => state.addFavorite);

    return (
    <div>
        <h2>All Recipes</h2>
        {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
            <div key={recipe.id}>
            <h3>
                <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
            <button onClick={() => addFavorite(recipe.id)}>
                Add to Favorites
            </button>
            </div>
        ))
        ) : (
        <p>No recipes found.</p>
        )}
    </div>
    );
};

export default RecipeList;
