import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recipes from "./pages/Recipes";
import Heropage from "./pages/Heropage";
import Pagenotfound from "./pages/Pagenotfound";
import Wines from "./pages/Wines";
import { RecipeProvider } from "./Context/RecipesContext";
function App() {
  return (
    <RecipeProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Heropage />} />
          <Route path="recipes" element={<Recipes />} />
          <Route path="wines" element={<Wines />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </RecipeProvider>
  );
}
export default App;
