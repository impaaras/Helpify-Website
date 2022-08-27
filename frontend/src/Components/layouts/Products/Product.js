import React from 'react'
import './Product.css'

const Product = ({image, product__title, price}) => {
  return (
    <div className='product__box'>
        <div className='product__image'>
           <img src={image} alt='images' />
        </div>
        <div className='product__text'>
            <h2>{product__title}</h2>
            <h3>$ {price}</h3>
        </div>
    </div>
  )
}

export default Product