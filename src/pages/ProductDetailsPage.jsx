import React from "react";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProductDetail from '../components/ProductDetails';
import products from '../data/Product'
import Spinner from "../components/Spinner";

function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);


  useEffect(() => {
    const found = products.find(p => p.id === Number(id))
    setProduct(found);
  }, [id]);


  if (!product) return <Spinner/>

  return <ProductDetail product={product} />;
}

export default ProductDetailPage;