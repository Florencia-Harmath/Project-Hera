import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getProduct(id)
      .then((response) => {
        setProduct(response);
      })
      .catch(() => {
        setProduct(null);
      });
  }, [id]);

  return <ItemDetail item={product} />;
};

export default ItemDetailContainer;
