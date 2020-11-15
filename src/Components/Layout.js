import './Layout.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Layout({ children }) {
  return (
    <div className="Layout">
      <nav className="Layout">
        <div className="NavBar">
          <Link to="/">Home</Link>
          <Link to="/classroom">Your Classroom</Link>
          <Link to="/help">Help</Link>
        </div>
      </nav>
      <main role = 'main'>
        { children }
      </main>
      <footer>
        <img src='/logo.png' className="Logo" alt="logo" />
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.array
};

export default Layout;
