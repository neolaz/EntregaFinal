import Categories from "./Categories/Categories.jsx"
import CartWidget from "./CartWidget/CartWidget.jsx"

const Menu = () => {
    return ( 
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Categories/>
            <CartWidget/>
        </div>
    );
}

export default Menu;