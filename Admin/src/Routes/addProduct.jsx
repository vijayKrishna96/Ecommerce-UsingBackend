import axios from "axios";
import React, { useRef } from "react";
import { useLoaderData } from "react-router-dom";


export async function loader(){
  const response = await fetch('http://localhost:3000/category/');
  const categories = await response.json();
  return {categories}
}


export default function AddProduct() {
  const  { categories }= useLoaderData()
  const titleRef = useRef(null);
  const brandRef = useRef(null);
  const priceRef = useRef(null);
  const mainImageRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);
  const descriptionRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    const title = titleRef.current.value;
    const brand = brandRef.current.value;
    const price = priceRef.current.value;
    const mainImage = priceRef.current.value;
    const image1 = image1Ref.current.value;
    const image2 = image2Ref.current.value;
    const image3 = image3Ref.current.value;
    const description = descriptionRef.current.value;

    const data = {
      title: title,
      brand: brand,
      price: price,
      mainImage: mainImage,
      images: [image1, image2, image3],
      description: description,
    };

    axios
      .post("http://localhost:3000/products", data)
      .then((response) => console.log(response))
      .catch(console.error());
  }
  return (
    <>
      <main>
        <section className="container mx-auto py-20">
          <h2 className="font-bold text-2xl">Add New Product</h2>
          <form
            onSubmit={handleSubmit}
            action=""
            className="flex  flex-col gap-4"
          >
            <label htmlFor="title">Title</label>
            <input
              ref={titleRef}
              type="text"
              className="p-2 border border-grey-500 "
              id="title"
            />
            <label htmlFor="brand">Brand</label>
            <input
              ref={brandRef}
              type="text"
              className="p-2 border border-grey-500 "
              id="brand"
            />
            <label htmlFor="price">Price</label>
            <input
              ref={priceRef}
              type="number"
              className="p-2 border border-grey-500 "
              id="price"
            />
            <label htmlFor="mainImage">Main Image</label>
            <input
              ref={mainImageRef}
              type="text"
              className="p-2 border border-grey-500 "
              id="image"
            />
            <label htmlFor="image1"> Image 1</label>
            <input
              ref={image1Ref}
              type="text"
              className="p-2 border border-grey-500 "
              id="image"
            />
            <label htmlFor="image2"> Image 2 </label>
            <input
              ref={image2Ref}
              type="text"
              className="p-2 border border-grey-500 "
              id="image"
            />
            <label htmlFor="image3"> Image 3</label>
            <input
              ref={image3Ref}
              type="text"
              className="p-2 border border-grey-500 "
              id="image"
            />
            <label htmlFor="description">Description</label>
            <textarea
              ref={descriptionRef}
              name="description"
              className="p-2 border border-grey-500"
              id="description"
            ></textarea>

            <label htmlFor="category">Choose a Category:</label>
            <select name="category" id="category" >
              <option value="">--Please choose an option--</option>
              {
                categories.map(category => {
                  return(
                    <option key={category._id} value="">{category.categoryName}</option>
                  )
                })
              }
            </select>

            <button className="p-2 bg-indigo-500 text-white rounded-sm">
              Add Product
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
