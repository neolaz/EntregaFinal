import { useCartContext } from "../../../context/CartContext";
import DeleteIcon from "../../../img/delete.png";

const CartItem = ({product}) => {
    const {removeItem} = useCartContext()

    return (
        <div className="col-xl-3 cartItemCardContainer">
            <div className="cartItemCard">
                <figure>
                    <img className="imgResponsive" src={product.img} alt={product.title} />
                    <div className="cartCardDescription">
                        <h3 className="subTitle">{product.title}</h3>
                        <p>Cantidad: <span>{product.qty}</span></p>
                        <p>Precio unitario: $<span>{product.price}</span></p>
                        <p>Subtotal: $<span>{product.qty * product.price}</span></p>
                        <button className="cartDeleteItem" onClick={() => removeItem(product.id)}>
                            <img src={DeleteIcon}></img>
                        </button>
                    </div>
                </figure>
            </div>
        </div>
    );
}

export default CartItem;