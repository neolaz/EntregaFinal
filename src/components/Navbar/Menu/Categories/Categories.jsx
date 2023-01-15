const Categories = () => {
    return ( 
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link" href="/category/dragonball">
                    Dragon Ball
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/category/haikyu">
                    Haikyū!!
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/category/myheroacademia">
                    My Hero Academia
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/category/onepiece">
                    One Piece
                </a>
            </li>
        </ul>
    );
}

export default Categories;