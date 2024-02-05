import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recipes from "./pages/Recipes";
import Homepage from "./pages/Homepage";
import Heropage from "./pages/Heropage";
import Pagenotfound from "./pages/Pagenotfound";
import Login from "./pages/Login";
import Wines from "./pages/Wines";
import AccountPage from "./pages/AccountPage";
import Favorites from "./pages/Favorites";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Heropage />} />
        <Route path="recipes" element={<Recipes />} />
        <Route path="homepage" element={<Homepage />} />
        <Route path="wines" element={<Wines />} />
        <Route path="login" element={<Login />} />
        <Route path="account" element={<AccountPage />} />
        <Route path="favorites" element={<Favorites />}>
          <Route path="recipes" element={<p>Recipes</p>} />
          <Route path="wines" element={<p>Wines</p>} />
        </Route>
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
