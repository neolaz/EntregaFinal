import { Link } from "react-router-dom";

const Item = ({product}) => {
    return (
        <div className="col-xl-3 itemCardContainer">
            <div className="itemCard">
                <figure>
                    <img className="imgResponsive" src={product.img} alt={product.title} />
                    <div className="cardDescription">
                        <Link to={`/product/${product.id}`}>
                            <h2 className="subTitle">{product.title}</h2>
                        </Link>  
                    </div>
                </figure>
            </div>
        </div>
        
    );
}

export default Item;
