import React from 'react'

export const ProductCard = ({product}) => {
  return (
    <div>
        <div className="border p-4 rounded shadow hover:shadow-lg transition">
        <img src={product.thumbnail} alt={product.title} className="w-full h-40 object-cover rounded" />
        <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
        <p className="text-gray-700">${product.price}</p>
        </div>
    </div>
  )
}
