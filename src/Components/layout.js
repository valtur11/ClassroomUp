import './layout.css';
import logo from './logo.svg';

function Layout() {
    return (
        <div className="Layout">
            <nav className="Layout">
                <div class="NavBar">
                    <a class="active" href="">Home</a>
                    <a href="">App</a>
                    <a href="">etc</a>
                </div>
            </nav>
            <body>
            </body>
            <footer>
                <img src={logo} className="Logo" alt="logo" />     
</footer>
        </div>
    );
}