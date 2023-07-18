import { NavLink, Outlet } from 'react-router-dom';
import './layout.css';

interface LayoutTypes {
  handleDarkMode: () => void;
  darkMode: boolean;
}
function Layout({ handleDarkMode, darkMode }: LayoutTypes) {
  return (
    <div className="page">
      <nav className="nav">
        <NavLink to="/">Pagina Inicial</NavLink>
        <NavLink to="/profile/betrybe">Perfil</NavLink>
        <button
          onClick={ handleDarkMode }
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
