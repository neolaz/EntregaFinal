import { Link } from "react-router-dom";

const Categories = () => {
    return ( 
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link" to="/category/dragonball">
                    Dragon Ball
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/category/haikyu">
                    Haikyū!!
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/category/myheroacademia">
                    My Hero Academia
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/category/onepiece">
                    One Piece
                </Link>
            </li>
        </ul>
    );
}

export default Categories;