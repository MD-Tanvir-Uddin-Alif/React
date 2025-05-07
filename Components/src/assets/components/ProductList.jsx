import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const ProductList = () => {

    const [products, setProducts] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect (()=>{
        const fetchProducts = async()=>{
            try {
                const res = await axios.get('https://dummyjson.com/products');
                setProducts(res.data.products);
            }catch(err){
                console.error(err);
            }finally{
                setloading(false);
            }
        }
        fetchProducts();
    },[]);

    if (loading) return <p>Loading products...</p>;

  return (
    <div></div>
  )
}

export default ProductList