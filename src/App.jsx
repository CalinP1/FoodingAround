import { BrowserRouter, Routes, Route } from "react-router-dom";
import Restaurants from "./pages/Restaurants";
import Recipes from "./pages/Recipes";
import Homepage from "./pages/Homepage";
import Heropage from "./pages/Heropage";
import Pagenotfound from "./pages/Pagenotfound";
import Login from "./pages/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Heropage />} />
        <Route path="restaurants" element={<Restaurants />} />
        <Route path="recipes" element={<Recipes />} />
        <Route path="homepage" element={<Homepage />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
