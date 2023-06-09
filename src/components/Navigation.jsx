import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/" end activeclassname="active">Home</NavLink>
      </li>
      <li>
        <NavLink to="/categories" activeclassname="active">Categories</NavLink>
      </li>
      <li>
        <NavLink to="/add-book" activeclassname="active">Add Book</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
