import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom'

const SearchProduct = () => {

  const [query, setQuery] = useParams('');
  const [products, setProducts] = useParams([]);

  const handleSearch = async (e)=>{
    e.preventDefault();
    const res = await axios.get(`https://dummyjson.com/products/search?q=${query}`);
    setProducts(res.data.products);
  }

  return (
    <div>
      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border px-4 py-2 w-full rounded"
        />
        <button type="submit" className="bg-green-500 text-white px-4 rounded">Search</button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {products.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  )
}

export default SearchProduct