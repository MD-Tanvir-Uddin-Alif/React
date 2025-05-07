import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { ProductCard } from './ProductCard';

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
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
            {products.map(product => <ProductCard key={product.id} product={product}/>)}
        </div>
    </div>
  )
}

export default ProductList