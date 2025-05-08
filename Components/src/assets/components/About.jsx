import React from 'react'
import ProductList from './ProductList'
import { useParams } from 'react-router-dom'
import ProductDetails from './ProductDetails'

const About = () => {

  const {id} = useParams();

  return (
    <div>
        {id? <ProductDetails/>:<ProductList/>}
    </div>
  )
}

export default About