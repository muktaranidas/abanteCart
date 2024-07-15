import { RiDeleteBin5Line } from "react-icons/ri";
import { useRouteError } from "react-router-dom";
function DeleteProduct({id,refetch}) {
    const removeFav =  ( ) => {
        const confirmed = confirm("Are you sure?")
    if(confirmed){
        const res = fetch(`https://dummyjson.com/products/${id}`, {
            method: 'DELETE',
          })
          .then(res => res.json())
          .then(()=>{
            refetch()
          
        });
        
    } }

  return (
    < >
      	<RiDeleteBin5Line onClick={removeFav} />
    </>
  )
}

export default DeleteProduct
