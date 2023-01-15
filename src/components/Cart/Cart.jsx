import { useCartContext } from "../../context/CartContext";

const Cart = () => {
    const {cart,emptyCart, totalPrice, removeItem} = useCartContext()
    return (
        <>
            {cart.length === 0 ? 
                <div className="containerCustom cart">
                    <h1 className="title">Su carrito está vacío.</h1>
                    <a href="/checkout">Finalizar Compra</a>
                </div>
            :
                <div className="containerCustom cart">
                    <h1 className="title">ASDSADA</h1>
                    <a href="/checkout">Finalizar Compra</a>
                </div>
            }
        </>    
    );
}

export default Cart;
