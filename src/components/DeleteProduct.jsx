import { RiDeleteBin5Line } from "react-icons/ri";

function DeleteProduct({id,deleteById,handleDeleteProduct}) {
    const removeFav =  ( ) => {
        const confirmed = confirm("Are you sure?")
    if(confirmed){
        fetch(`https://dummyjson.com/products/${id}`, {
            method: 'DELETE',
          })
          .then(res => res.json())
          .then((data)=>{
            // console.log(data)
            handleDeleteProduct(id)

        });
        
    } }
  return (
    < >
      	<RiDeleteBin5Line onClick={removeFav} />
    </>
  )
}

export default DeleteProduct
