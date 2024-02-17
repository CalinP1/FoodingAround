import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recipes from "./pages/Recipes";
import Heropage from "./pages/Heropage";
import Pagenotfound from "./pages/Pagenotfound";
import Wines from "./pages/Wines";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Heropage />} />
        <Route path="recipes" element={<Recipes />} />
        <Route path="wines" element={<Wines />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
