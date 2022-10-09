import { Link } from "react-router-dom";

const Nav = () => (
  <nav>
    <ul className="nav-list">
      <li className="nav-link">
        <Link to="/characters">Characters</Link>
      </li>
      <li className="nav-link">
        <Link to="/quests">Quests</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
