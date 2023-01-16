import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const Cart = () => {
    const {cart,emptyCart, totalPrice, removeItem} = useCartContext()
    return (
        <>
            {cart.length === 0 ? 
                <div className="containerCustom cart">
                    <h1 className="title">Su carrito está vacío.</h1>
                    <Link to="/checkout">Finalizar Compra</Link>
                </div>
            :
                <div className="containerCustom cart">
                    <h1 className="title">Carrito</h1>
                    <div className="row">
                        {cart.map(product => 
                            <div className="col-xl-3 cartItemCardContainer">
                                <div className="cartItemCard">
                                    <figure>
                                        <img className="imgResponsive" src={product.img} alt={product.title} />
                                        <div className="cartCardDescription">
                                            <h3 className="subTitle">{product.title}</h3>
                                            <p>Cantidad: <span>{product.qty}</span></p>
                                            <p>Precio unitario: <span>{product.price}</span></p>
                                            <p>Subtotal: <span>{product.qty * product.price}</span></p>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                        )}
                        <h2 className="subTitle">Total: <span>100</span></h2>
                        <div className="cartActionButtonsContainer">
                            <button>Vaciar Carrito</button>
                            <button><Link  to={'/'}>Continuar comprando</Link></button>
                            <button><Link  to={'/checkout'}>Finalizar Compra</Link></button>
                        </div>
                    </div>
                </div>
            }
        </>    
    );
}

export default Cart;
