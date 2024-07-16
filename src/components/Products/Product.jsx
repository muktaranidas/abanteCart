import { FaRegEdit } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";
import DeleteProduct from "../DeleteProduct";
import { useEffect, useState } from "react";
function Product({product,refetch,handleProductUpdate}) {
    const {id,title, images,brand,minimumOrderQuantity,price,} = product
	const [newTitle,setNewTitle] = useState(title)
	const [newModel,setNewModel] = useState(brand)
	const [newPrice,setNewPrice] = useState(price)
	const [newQuantity,setNewQuantity] = useState(minimumOrderQuantity)
	const handleSubmit = async (e)=>{
        e.preventDefault()
		const body = {title:newTitle, model:newModel, price :newPrice, minimumOrderQuantity: newQuantity}
		fetch(`https://dummyjson.com/products/${id}`, {
		method: 'PUT', /* or PATCH */
		headers: { 'Content-Type': 'application/json' },
		body:JSON.stringify(body)
  })
  .then(res => res.json())
  .then(data =>{
	handleProductUpdate(id, {title:newTitle, model:newModel, price :newPrice, minimumOrderQuantity: newQuantity} )
  }
)
    }
  return (
    <>
     <div className="flex border-y  dark:bg-gray-300">
			<div className="flex   items-center justify-center w-8 px-2  sm:p-3">
				<input type="checkbox" name="All" className="w-3 h-3 rounded-sm dark:accent-violet-600" />
			</div>
			<div>
				<img className="w-12" src={images} alt="" />
			</div>
          <div className="w-32 px-2 py-3 sm:p-3">
          <input onChange={(e) =>setNewTitle(e.target.value)} value={newTitle} type="text" placeholder={title} className="input input-bordered input-xs rounded-none w-full max-w-xs" />
          </div>
			<div className="w-32 px-2 py-3 sm:p-3">
			<input onChange={(e) => setNewModel(e.target.value)} value={newModel} type="text" placeholder={brand} className="input input-bordered input-xs rounded-none w-full max-w-xs" />
			</div>
			<div className="w-32 px-2 py-3 sm:p-3">
			<input onChange={(e)=>setNewPrice(e.target.value)} value={newPrice}  type="text" placeholder={price} className="input input-bordered input-xs rounded-none w-full max-w-xs" />
			</div>
			<div className="w-32 px-2 py-3 sm:p-3">
			<input onChange={(e) => setNewQuantity(e.target.value)} value={newQuantity} type="text" placeholder={minimumOrderQuantity} className="input input-bordered rounded-none input-xs w-full max-w-xs" />
			</div>
			<div className="w-32 px-2 py-3 sm:p-3 ">
			<label htmlFor="Toggle4" className="inline-flex border  cursor-pointer">
	             <input id="Toggle4" type="checkbox" className="hidden peer " />
	             <span className="bg-blue-500 px-2 py-1 text-xs">ON</span>
	             <span className="px-2 py-1 text-xs">OFF</span>
            </label>
			</div>  
			<div className="flex flex-col">	
			<div className="w-32   flex gap-2 sm:p-3">
           <div onClick={handleSubmit}> <FaRegEdit  /></div>
			<FiCopy />
			<DeleteProduct id={id} refetch={refetch}></DeleteProduct>
			</div>
			</div></div>
			
			
		
    </>
  )
}

export default Product



