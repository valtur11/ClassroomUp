import './Layout.css';

function Layout() {
  return (
    <div className="Layout">
      <nav className="Layout">
        <div className="NavBar">
          <a className='active' href='#'>Home</a>
          <a href="">App</a>
          <a href="">etc</a>
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