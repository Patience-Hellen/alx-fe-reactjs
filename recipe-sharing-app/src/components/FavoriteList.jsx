// src/components/FavoritesList.jsx
import useRecipeStore from './recipeStore';

const FavoritesList = () => {
    const favorites = useRecipeStore((state) =>
    state.favorites.map((id) => state.recipes.find((recipe) => recipe.id === id))
    );
    const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
    );

    return (
    <div>
        <h2>My Favorites</h2>
        {favorites.length > 0 ? (
        favorites.map((recipe) => (
            <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            </div>
        ))
        ) : (
        <p>No favorites yet.</p>
        )}
        <button onClick={generateRecommendations}>
        Generate Recommendations
        </button>
    </div>
    );
};

export default FavoritesList;
