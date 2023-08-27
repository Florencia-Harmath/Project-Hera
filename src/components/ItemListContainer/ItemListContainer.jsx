import { useState, useEffect } from "react";
import { getProducts } from "../../services";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

const ItemlistContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getProducts(categoryId).then((filteredProducts) => {
      setItems(filteredProducts);
      setLoading(false);
    });
  }, [categoryId]);

  if (loading) {
    return <h2>   Cargando...</h2>;
  }

  return <ItemList items={items} />;
};

export default ItemlistContainer;