import { NavLink } from "react-router-dom";

function FavoritesNav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="recipes">Recipes</NavLink>
        </li>
        <li>
          <NavLink to="wines">Wines</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default FavoritesNav;
