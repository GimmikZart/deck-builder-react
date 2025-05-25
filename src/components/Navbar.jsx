// src/components/Navbar.jsx
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const baseClasses = 'font-bold h-full w-full flex items-center justify-center'
  const inactive = 'bg-gray-700 text-gray-300 hover:text-white'
  const active   = 'bg-gray-800 text-white'

  return (
    <nav className="h-16 w-full flex z-50">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `${baseClasses} ${isActive ? active : inactive}`
        }
      >
        Cards List
      </NavLink>
      <NavLink
        to="/collection"
        className={({ isActive }) =>
          `${baseClasses} ${isActive ? active : inactive}`
        }
      >
        Collection
      </NavLink>
    </nav>
  )
}
