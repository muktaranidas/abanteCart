import { useEffect } from "react"
import { useState } from "react"
import Product from "./Product"
function Products() {
   const [products , setProducts] = useState(1)
   const handleGetProducts = ()=>{
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {setProducts(data)
    })
    .catch(error => console.log(error))
   }
   useEffect(()=> {
    handleGetProducts()
    },[])
    const handleSingleProductUpdate = (id, updateValues) => {
      setProducts(data =>{
        const updateProducts = data.products.map(product => {
          if(product.id === id){
            return {...product, ...updateValues}
          }
          else{
            return product
          }
        })
        return {...data,  products :  updateProducts}
      })
    }
      const handleDeleteOneProduct = (id)=>{
        setProducts(data=>{
          const productList = data.products.filter(product =>  product.id !== id)
          return {...data, products: productList}
        })
      }
  return (
    <>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
	<div className="flex  flex-col overflow-x-auto text-xs">
  <div className="flex flex-row">
	<div className="w-32 font-bold px-2 py-3 sm:p-3"></div>
	<div className="w-32 font-bold px-2 py-3 sm:p-3">Product Name</div>
	<div className="w-32 font-bold px-2 py-3 sm:p-3">Model</div>
	<div className="w-32 font-bold px-2 py-3 sm:p-3">Price</div>
	<div className="w-32 font-bold px-2 py-3 sm:p-3">Quantity</div>
	<div className="w-32 font-bold px-2 py-3 sm:p-3">Status</div>
	<div className="w-32 font-bold px-2 py-3 sm:p-3">Action</div>
	</div>
        {
            products.products?.map((product) => (
                <Product key={product.id} product={product} refetch={handleGetProducts} handleSingleProductUpdate={handleSingleProductUpdate} handleDeleteOneProduct={handleDeleteOneProduct}></Product>
            ))
        }
	</div>
</div>
    </>
  )
}
export default Products
