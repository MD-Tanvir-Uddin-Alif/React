import React from 'react'
import ProductList from './ProductList'
import { useParams } from 'react-router-dom'
import ProductDetails from './ProductDetails'
import SearchProduct from './SearchProduct'

const About = () => {

  const {id} = useParams();

  return (
    <div>
        <SearchProduct/>
        {id? <ProductDetails/>:<ProductList/>}
    </div>
  )
}

export default About