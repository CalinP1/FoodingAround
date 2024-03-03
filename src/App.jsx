import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecipeProvider } from "./Context/RecipesContext";
import SpinnerFullPage from "./pages/SpinnerFullPage";
import { lazy, Suspense } from "react";
const Recipes = lazy(() => import("./pages/Recipes"));
const Heropage = lazy(() => import("./pages/Heropage"));
const Pagenotfound = lazy(() => import("./pages/Pagenotfound"));
const Wines = lazy(() => import("./pages/Wines"));

function App() {
  return (
    <RecipeProvider>
      <BrowserRouter>
        <Suspense fallback={<SpinnerFullPage />}>
          <Routes>
            <Route index element={<Heropage />} />
            <Route path="recipes" element={<Recipes />} />
            <Route path="wines" element={<Wines />} />
            <Route path="*" element={<Pagenotfound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </RecipeProvider>
  );
}
export default App;
