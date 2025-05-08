import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

    const {id} = useParams();
    const [product, setProduct] = useState(null);

    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/${id}`)
        .then(res => setProduct(res.data))
        .catch(err => console.log(err));
    },[id]); 

    if(!product) return <p>Loadiing product detail...</p>

  return (
    <div>
            <div className="p-6">
            <img src={product.thumbnail} alt={product.title} className="w-full h-64 object-cover rounded" />
            <h2 className="text-2xl font-bold mt-4">{product.title}</h2>
            <p className="text-gray-700">{product.description}</p>
            <p className="text-green-600 font-semibold mt-2">${product.price}</p>
        </div>
    </div>
  )
}

export default ProductDetails