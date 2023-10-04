import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

// styles
import './Navbar.css'

// components
import Searchbar from './Searchbar'

export default function Navbar() {
  const { color } = useContext(ThemeContext)

  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <NavLink to="/" className="brand">
          <h1>Cooking Ninja</h1>
        </NavLink>
        <Searchbar />
        <NavLink to="/create">Create Recipe</NavLink>
      </nav>
    </div>
  )
}
