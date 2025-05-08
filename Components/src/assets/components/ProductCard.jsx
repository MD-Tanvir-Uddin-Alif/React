import React from 'react'
import { Link } from 'react-router-dom'

export const ProductCard = ({product}) => {
  return (
    <div>
      <Link to={`/product/${product.id}`}>
        <div className="border p-4 rounded shadow hover:shadow-lg transition">
        <img src={product.thumbnail} alt={product.title} className="w-full h-40 object-cover rounded" />
        <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
        <p className="text-gray-700">${product.price}</p>
        </div>
      </Link>
    </div>
  )
}
