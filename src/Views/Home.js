import React from "react";
import Loader from "../Components/Loader";
import ProductCard from "../Components/ProductCard";
import { useAxiosGet } from "../Hooks/HttpRequests";

function Home() {
  const url = `https://63d7f1155dbd72324430539b.mockapi.io/api/v1/products?page=1&limit=10`;
  
  let products = useAxiosGet(url)

  let content = null

  if(products.error){
    content = <p>
      Error 101. Please try again later.
    </p>
  }

  if(products.loading){
    content = <Loader></Loader>
  }

  if (products.data) {
    content = 
    products.data.map((product) => 
      <div key={product.id}>
        <ProductCard 
          product={product}/>
      </div>
    
    )
  }

  return (
    <div>
        <h1 className="font-bold text-2xl">Best Sellers</h1>
        {content}
    </div>
  )
}

export default Home