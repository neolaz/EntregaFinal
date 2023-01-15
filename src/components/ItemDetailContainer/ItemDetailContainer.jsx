import { useState, useEffect } from "react";
import { useParams } from "react-router";

import ItemDetail from '../ItemDetail/ItemDetail.jsx';
import { getProduct } from '../../assets/firebase.js';

const ItemDetailContainer = ({greeting}) => {

  const [product, setProduct] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    getProduct(id).then(prod => setProduct(prod))
  },[]);
  
  return (
    <div className="containerCustom">
      <ItemDetail item={product} />
    </div>
      
  );
}

export default ItemDetailContainer;