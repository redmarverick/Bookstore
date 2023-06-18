import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <header className="bg-white py-4 px-8 flex items-center">
    <div className="flex items-center">
      <h1 className="text-3xl montserrat font-bold text-blue-500">Bookstore CMS</h1>
      <nav className="ml-6">
        <NavLink exact to="/" activeClassName="active" className="montserrat text-black text-sm font-medium tracking-wide uppercase">
          Home
        </NavLink>
        <NavLink to="/categories" activeClassName="active" className="montserrat text-black text-sm font-medium tracking-wide uppercase ml-4">
          Categories
        </NavLink>
      </nav>
    </div>
    <figure className="flex items-center justify-center ml-auto">
      <div className="bg-white border border-solid border-gray-300 rounded-full h-12 w-12 flex items-center justify-center">
        <span className="text-azure-500 text-xl">&#128100;</span>
      </div>
    </figure>
  </header>
);

export default Navigation;
