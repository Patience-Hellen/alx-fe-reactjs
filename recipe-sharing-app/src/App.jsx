import { Link, Route, BrowserRouter as Router, Routes, useParams } from 'react-router-dom';
import './App.css';

import AddRecipeForm from './components/AddRecipeForm';
import FavoritesList from './components/FavoritesList';
import RecipeDetails from './components/RecipeDetails';
import RecipeList from './components/RecipeList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <Router>
      {/* Simple Navigation */}
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/add">Add Recipe</Link> |{" "}
        <Link to="/favorites">Favorites</Link> |{" "}
        <Link to="/recommendations">Recommendations</Link>
      </nav>

      <Routes>
        {/* Home page shows all recipes */}
        <Route path="/" element={<RecipeList />} />

        {/* Add new recipe page */}
        <Route path="/add" element={<AddRecipeForm />} />

        {/* Favorites page */}
        <Route path="/favorites" element={<FavoritesList />} />

        {/* Recommendations page */}
        <Route path="/recommendations" element={<RecommendationsList />} />

        {/* Recipe details (dynamic id) */}
        <Route path="/recipes/:id" element={<RecipeDetailsWrapper />} />
      </Routes>
    </Router>
  );
}

// Wrapper to use useParams for recipeId
const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={parseInt(id)} />;
};

export default App;
