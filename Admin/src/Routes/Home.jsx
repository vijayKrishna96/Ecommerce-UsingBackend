import React from 'react'
import ProductCard from '../components/productCard'
import { useLoaderData } from 'react-router-dom';

export async function loader(){
  const response = await fetch('http://localhost:3000/products');
  const products = await response.json();
  return {products}
}

export default function Home() {
   const { products } = useLoaderData();
  return (
    <main>
        <section className='container mx-auto py-16'>
          <h2 className='text-2xl font-bold'>Recomended Products</h2>
          <div className='grid grid-cols-3 gap-4 mt-8'>
            {
              products.map(product => {
                return(
                  <ProductCard key={product._id} product={product}/>
                )
              })
            }
          </div>
        </section>
    </main>
  )
}
