import Item from "../Item/Item";

const ItemList = ({productsList}) => {
    return (
        <div className="row">
            {productsList.map(product => <Item key={product.id} product={product}/>)}
        </div>
    );
}

export default ItemList;
