import Cart from "../../../../img/cart.png";
import { Link } from "react-router-dom";

const CartWidget = () => {
    return ( 
        <div className="nav-item botonCarrito">
            <Link className="linkCarrito" to='/cart'> 
                <img src={Cart} alt="Logo de MangaHouse" />
                Carrito (0)
            </Link>
        </div>
    );
}

export default CartWidget;
