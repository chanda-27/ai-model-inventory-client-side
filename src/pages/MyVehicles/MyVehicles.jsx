import React, { use, useEffect, useState } from "react";
import useAxiosSecure from "./../../hooks/useAxiosSecure";
import { AuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";
const MyVehicles = () => {
  const axiosSecure = useAxiosSecure();
    const { user } = use(AuthContext);
    const axiosInstance = useAxios();
    const [products, setProducts] = useState([])

    useEffect(() => {
      
        axiosSecure.get(`/userProducts?email=${user.email}`)
            .then(data => {
                setProducts(data.data);

        })
    }, [user, axiosSecure]);
     const handleDeleteProduct = (_id) => {
        
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
    
                    axiosInstance.delete(`/products/${_id}`)
                        .then(data => {
                            if (data.data.deletedCount) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your bid has been deleted.",
                                    icon: "success"
                                });
    
                                // 
                                const remainingProducts = products.filter(bid => bid._id !== _id);
                                setProducts(remainingProducts)
                            }
                        })
    
    
                }
            });
    }
    return <div>
        {
            products.map(product => (
              <div className='border'>
            <p>{product.vehicleName}</p> 
            <p>{product.userEmail}</p>
            <button className='btn'>update</button>
          
            <button onClick={()=>handleDeleteProduct(product._id)} className='btn'>Delete</button>
        </div>
            ))
      }
  </div>;
};

export default MyVehicles;
