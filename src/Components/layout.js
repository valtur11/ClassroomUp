import './Layout.css';
import { Link } from 'react-router-dom';

function Layout() {
  return (
    <div className="Layout">
      <nav className="Layout">
        <div className="NavBar">
          <Link to="/">Home</Link>
          <Link to="/classroom">Your Classroom</Link>
          <Link to="/help">Help</Link>
        </div>
      </nav>
      <body>
      </body>
      <footer>
        <img src='/logo.png' className="Logo" alt="logo" />
      </footer>
    </div>
  );
}

export default Layout;