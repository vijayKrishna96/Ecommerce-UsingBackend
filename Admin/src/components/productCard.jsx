
import React from 'react'
import { Link } from 'react-router-dom'


export default function ProductCard(props) {
  const product = props.product;

  return (
    <article>
      <Link to={`/product/${product._id}`}>
        <img className='w-full aspect-[3/4] object-cover' src={product.mainImage} alt={product.title} />
      </Link>
      <span>{product.brand}</span>
      <h3 className='font-bold'>{product.title}</h3>
      <span>&#x20B9;{product.price}</span>
      <button
        className='p-2 ml-2 w-150 bg-red-300'
      >
        Delete Product
      </button>
    </article>
  );
}

