import { NavLink } from 'react-router-dom';
import './sidebar.css';

const Sidebar = ({ links = [] }) => (
  <aside className="sidebar-wrap p-4 rounded-xl text-white">
    <h2 className="font-semibold text-lg mb-4">Dashboard</h2>
    <div className="space-y-2">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) => `block rounded-lg px-3 py-2 ${isActive ? 'bg-white text-indigo-700' : 'hover:bg-indigo-700/70'}`}
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  </aside>
);

export default Sidebar;
