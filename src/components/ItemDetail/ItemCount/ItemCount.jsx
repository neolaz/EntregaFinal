import {useState} from 'react';

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial);
    const sumar = () => count < stock && setCount(count + 1)
    const restar = () => count > 1 && setCount(count - 1)
    const addToCart= () => onAdd(count)

    return (
        <div className="itemCount">
            <button className="itemCountButton" onClick={restar}>-</button>   
            <p>{count}</p>            
            <button className="itemCountButton" onClick={sumar}>+</button>
            <button className="itemCountButton itemCountCarrito" onClick={addToCart}>Añadir al Carrito</button>
        </div>
    );
}

export default ItemCount;
