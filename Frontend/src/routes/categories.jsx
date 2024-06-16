import React from "react";
import { Link, useLoaderData } from "react-router-dom";

export async function loader() {
  const response = await fetch("http://localhost:3000/category");
  const categories = await response.json();
  return { categories };
}

function Category() {
  const { categories } = useLoaderData();
  console.log(categories);
  return (
    <main>
      <section className="portion">
        <h1>Shop by category</h1>
        <ul className="categoryGrid">
          {categories.map((category) => {
            return (
              <>
                <li key={category._id}>
                    <Link to={`/category/${category._id}`}>
                      <img src={category.image} alt="" />
                    </Link>
                    <h2>{category.categoryName}</h2>
                </li>
              </>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
export default Category;
