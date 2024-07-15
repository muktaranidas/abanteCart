import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";

function Product({product}) {
    const {title, images,brand,minimumOrderQuantity,price} = product
  return (
    <>
     <div className="flex border-y  dark:bg-gray-300">
			<div className="flex   items-center justify-center w-8 px-2 py-3 sm:p-3">
				<input type="checkbox" name="All" className="w-3 h-3 rounded-sm dark:accent-violet-600" />
			</div>
			<div className="w-32 font-bold   px-2 py-3 sm:p-3"></div>
			<div className="w-32 font-bold   px-2 py-3 sm:p-3">Product Name</div>
			<div className="w-32 font-bold px-2 py-3 sm:p-3">Model</div>
			<div className="w-32 font-bold px-2 py-3 sm:p-3">Price</div>
			<div className="w-32 font-bold px-2 py-3 sm:p-3">Quantity</div>
			<div className="w-32 font-bold px-2 py-3 sm:p-3">Status</div>
			<div className="w-32 font-bold px-2 py-3 sm:p-3">Action</div>
			
			
		</div>
		<div className="flex border-y border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
			<div className="flex items-center justify-center w-8 px-2 py-3 sm:p-3">
				<input type="checkbox" className="w-3 h-3 rounded-sm dark:accent-violet-600" name="Box0" />
			</div>
			<div className="w-32 px-2 py-3 sm:p-3">
				<img src={images} alt="" />
			</div>
			<div className="w-32 px-2 py-3 sm:p-3">
				<p>{title}</p>
			</div>
			<div className="w-32 px-2 py-3 sm:p-3">
				<p>{brand}</p>
			</div>
			<div className="w-32 px-2 py-3 sm:p-3">
				<p>{price}</p>
			</div>
			<div className="w-32 px-2 py-3 sm:p-3">
				<p>{minimumOrderQuantity}</p>
			</div>
			<label htmlFor="Toggle4" className="inline-flex py-3  cursor-pointer">
	             <input id="Toggle4" type="checkbox" className="hidden peer" />
	             <span className=" ">OFF</span>
	             <span className="px-2 ">ON</span>
            </label>
			<div className="w-32 ml-16 px-2 py-3 flex gap-1 sm:p-3">
			
            <FaRegEdit />
			<RiDeleteBin5Line />
			<FiCopy />
			<RiDeleteBin5Line />
			</div>
			
			
			
            
			
		</div>
    </>
  )
}

export default Product



