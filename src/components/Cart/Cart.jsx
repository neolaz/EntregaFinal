import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import CartItem  from "./CartItem/CartItem"

const Cart = () => {
    const {cart,emptyCart, getTotal} = useCartContext()
    
    return (
        <>
            {cart.length === 0 ? 
                <div className="containerCustom cart">
                    <h1 className="title">Su carrito está vacío.</h1>
                    <Link to="/">Continuar comprando</Link>
                </div>
            :
                <div className="containerCustom cart">
                    <h1 className="title">Carrito</h1>
                    <div className="row">
                        {cart.map(product => <CartItem key={product.id} product={product}/>)}
                        <h2 className="subTitle">Total: <span>${getTotal()}</span></h2>
                        <div className="cartActionButtonsContainer">
                            <button onClick={emptyCart}>Vaciar carrito</button>
                            <button><Link  to={'/'}>Continuar comprando</Link></button>
                            <button><Link  to={'/checkout'}>Finalizar compra</Link></button>
                        </div>
                    </div>
                </div>
            }
        </>    
    );
}

export default Cart;
