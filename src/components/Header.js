import classes from './Header.module.css';

import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '../store/auth';

const Header = () => {

  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

  const loginHandler = () => {
    dispatch(authActions.login())
  }

  const logoutHandler = () => {
    dispatch(authActions.logout())
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          {isAuthenticated && <li>
            <a href='/'>My Products</a>
          </li>}
          {isAuthenticated && <li>
            <a href='/'>My Sales</a>
          </li>}
          {isAuthenticated && <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>}
          {!isAuthenticated && <li>
            <button onClick={loginHandler}>Login</button>
          </li>}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
