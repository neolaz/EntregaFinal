import { Link } from "react-router-dom";
import { useCartContext } from "../../../../context/CartContext";
import Cart from "../../../../img/cart.png";

const CartWidget = () => {
    const {getItemQuantity} = useCartContext()

    return ( 
        <div className="nav-item botonCarrito">
            <Link className="linkCarrito" to='/cart'> 
                <img src={Cart} alt="Logo de MangaHouse" />
                Carrito ({getItemQuantity()})
            </Link>
        </div>
    );
}

export default CartWidget;
