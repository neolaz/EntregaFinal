import BrandLogo from "./BrandLogo/BrandLogo.jsx";
import Menu from "./Menu/Menu.jsx";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <BrandLogo/>
                <Menu/>
            </div>
        </nav>
    );
}

export default Navbar;