import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { db } from "../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

import { ItemList } from "./ItemList";
import { ProductCardSkeleton } from "../../components/ProductCardSkeleton/ProductCardSkeleton";

import "./itemList.css";

export const ItemListContainer = () => {
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [error, setError] = useState({});

  useEffect(() => {
    const productsCollection = collection(db, "products");
    let filteredCollection = productsCollection;

    if (category) {
      filteredCollection = query(
        productsCollection,
        where("category", "==", category)
      );
    }

    let getProducts = getDocs(filteredCollection);
    getProducts
      .then((res) => {
        let fixedProducts = res.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setProducts(fixedProducts);
      })
      .catch((error) => setError(error));
  }, [category]);

  const renderSkeleton = (cardNumber) => {
    const skeletons = [];
    for (let i = 0; i < cardNumber; i++) {
      skeletons.push(<ProductCardSkeleton key={i} />);
    }
    return skeletons;
  };

  return <ItemList items={products} renderSkeleton={renderSkeleton} />;
};
