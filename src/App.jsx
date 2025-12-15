import { Routes, Route, NavLink } from 'react-router-dom'
import { ItemsList } from './pages/ItemsList'
import { ItemDetails } from './pages/ItemDetails'
import './App.css'

export const App = () => {

  return (
    <>
     <h1>React Router példa</h1>
      <nav className="d-flex gap-4 p-3 fs-3">
        <NavLink to="/" className="nav-link">
        <i className="bi bi-house-door-fill me-2"></i>
        Lista</NavLink>
        <NavLink to="/comment-new" className="nav-link">
        <i className="bi bi-info-circle-fill me-2"></i>
        Új listaelem</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<ItemsList />} />
        <Route path="/item/:itemId" element={<ItemDetails />} />
      </Routes>
    </>
  )
}

export default App
