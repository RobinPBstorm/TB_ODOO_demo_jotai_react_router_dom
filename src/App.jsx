import './App.css'

import { NavLink } from 'react-router-dom';
import AppRoutes from './AppRoutes';

function App() {
 
  return (
    <>
      <nav>
        <ul>
          <li><NavLink to="/home">Home</NavLink></li>
          <li><NavLink to="/boat">Liste de bateau</NavLink></li>
        </ul>
      </nav>
      <main>
        <AppRoutes/>
      </main>
    </>
  )
}

export default App
