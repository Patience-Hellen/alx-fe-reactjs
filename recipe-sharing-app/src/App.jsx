import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import RecipeList from './components/RecipeList';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page shows all recipes */}
        <Route path="/" element={<RecipeList />} />

        {/* Add new recipe page */}
        <Route path="/add" element={<AddRecipeForm />} />

        {/* Recipe details (dynamic id) */}
        <Route path="/recipes/:id" element={<RecipeDetailsWrapper />} />
      </Routes>
    </Router>
  );
}

// Wrapper to use useParams for recipeId
import { useParams } from 'react-router-dom';

const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={parseInt(id)} />;
};

export default App;
