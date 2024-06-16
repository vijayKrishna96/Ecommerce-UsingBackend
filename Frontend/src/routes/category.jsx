import React from "react";
import ProductCard from "../components/productCard";
import { useLoaderData } from "react-router-dom";

export async function loader({params}){
    const response = await fetch(`http://localhost:3000/category/${params.categoryId}`)
    const category = await response.json()

    const productResponse = await fetch(`http://localhost:3000/products?category=${params.categoryId}`);
    const products = await productResponse.json()

    return { category , products }
}

export default function Cat(props) {
    const {category, products} = useLoaderData()
    console.log(category, products)
  return (
    <main>
      <section className="portion ">
        <h1>{category.categoryName}</h1>
        <div className="productsList row">
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
  );
}
