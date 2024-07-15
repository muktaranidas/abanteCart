import { useEffect } from "react"
import { useState } from "react"
import Product from "./Product"

function Products() {
   const [products , setProducts] = useState([])
   useEffect(()=> {
    fetch('https://dummyjson.com/products')
         .then(res => res.json())
         .then(data => {setProducts(data)
            console.log(data)
         })
         .catch(error => console.log(error))
   },[])
  return (
    <>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
	<h2 className="mb-4 text-2xl font-bold leading-tight">Products</h2>

	<div className="flex  flex-col overflow-x-auto text-xs">
        {
            products.products?.map((product) => (
                <Product key={product.id} product={product}></Product>
            ))
        }
	</div>
</div>
    </>
  )
}

export default Products
