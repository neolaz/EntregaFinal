import { useState, useEffect } from "react";
import { useParams } from "react-router";

import ItemList from '../ItemList/ItemList.jsx';
import { getProducts } from '../../assets/firebase.js';

const ItemListContainer = ({greeting}) => {

  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("Bienvenidos a MangaHouse");
  const {category} = useParams();

  useEffect(() => {
    if(category) {
      getProducts().then(prod => {
        const productsList = prod.filter(p => p.stock > 0 && p.categoryId == category);

        setTitle(`Catálogo de ${productsList[0].serie}`);
        setProducts(ItemList({productsList}));
      })
    } else {
      getProducts().then(prod => {
        const productsList = prod.filter(p => p.stock > 0);

        setTitle("Bienvenidos a MangaHouse");
        setProducts(ItemList({productsList}));
      })
    }
    
  },[category]);
  
  return (
    <div className="containerCustom itemListContainer">
      <h1 className="title">{title}</h1>
      {products}
    </div>
      
  );
}

export default ItemListContainer;