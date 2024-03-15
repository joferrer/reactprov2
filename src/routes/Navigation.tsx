import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
  Navigate
} from 'react-router-dom';

import {
  Home,
  About,
  Users
} from '../01-lazyload/pages'

import logo from '../assets/react.svg';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/" className={({isActive})=> isActive ? "nav-active":""} replace>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({isActive})=> isActive ? "nav-active":""} replace>About</NavLink>
            </li>
            <li>
              <NavLink to="/users" className={({isActive})=> isActive ? "nav-active":""} replace>Users</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to={'/'} replace />} />
        </Routes>
      </div>
    </Router>
  );
}