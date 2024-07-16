import { RiDeleteBin5Line } from "react-icons/ri";

function DeleteProduct({id,refetch}) {
    const removeFav =  ( ) => {
        const confirmed = confirm("Are you sure?")
    if(confirmed){
        fetch(`https://dummyjson.com/products/${id}`, {
            method: 'DELETE',
          })
          .then(res => res.json())
          .then((data)=>{
            refetch()
            console.log(data)
        });
        
    } }
  return (
    < >
      	<RiDeleteBin5Line onClick={removeFav} />
    </>
  )
}

export default DeleteProduct
