// Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./Navbar.css";
function Navbar() {
  const location = useLocation();

  return (
    <ul className="flex">
      <MenuItem to="/" label="Generale" isActive={location.pathname === '/'} />
      <MenuItem to="/fatturazione" label="Fatturazione" isActive={location.pathname === '/fatturazione'} />
      <MenuItem to="/rifornimenti" label="Rifornimenti" isActive={location.pathname === '/rifornimenti'} />
    </ul>
  );
}

function MenuItem({ to, label, isActive }) {
  return (
    <li className={`border-solid border-2 p-2 ${isActive ? 'active' : ''}`}>
      <Link to={to}>{label}</Link>
    </li>
  );
}

export default Navbar;
